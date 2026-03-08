#!/usr/bin/env python3
import argparse
from pathlib import Path
from PIL import Image

def convert_png_to_webp(
    in_path: Path,
    out_path: Path,
    quality: int,
    lossless: bool,
    method: int,
    overwrite: bool
) -> bool:
    out_path.parent.mkdir(parents=True, exist_ok=True)

    if out_path.exists() and not overwrite:
        return False

    with Image.open(in_path) as im:
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.getbands() else "RGB")

        save_kwargs = {"format": "WEBP", "method": method}

        if lossless:
            save_kwargs["lossless"] = True
        else:
            save_kwargs["quality"] = quality

        im.save(out_path, **save_kwargs)

    return True

def iter_png_files(folder: Path, recursive: bool):
    pattern = "**/*.png" if recursive else "*.png"
    # también recoge .PNG si hubiera
    yield from folder.glob(pattern)
    yield from folder.glob(pattern.replace(".png", ".PNG"))

def main():
    parser = argparse.ArgumentParser(
        description="Convierte PNG a WebP (batch). Uso: png_to_webp.py <inputs...> <output>"
    )
    parser.add_argument(
        "paths",
        nargs="+",
        help="Uno o más inputs (ficheros PNG o carpetas) y al final el output (carpeta o fichero si solo 1 input).",
    )
    parser.add_argument("--quality", type=int, default=85, help="Calidad WebP (0-100) con pérdida (default: 85)")
    parser.add_argument("--lossless", action="store_true", help="WebP sin pérdida (ignora quality)")
    parser.add_argument("--method", type=int, default=6, help="Método WebP (0-6) (default: 6)")
    parser.add_argument("--overwrite", action="store_true", help="Sobrescribe si existe")
    parser.add_argument("--recursive", action="store_true", help="Si input es carpeta, busca PNGs recursivamente")

    args = parser.parse_args()

    if len(args.paths) < 2:
        raise SystemExit("Error: necesitas al menos un input y un output.")

    output = Path(args.paths[-1])
    inputs = [Path(p) for p in args.paths[:-1]]

    if args.quality < 0 or args.quality > 100:
        raise SystemExit("Error: --quality debe estar entre 0 y 100")
    if args.method < 0 or args.method > 6:
        raise SystemExit("Error: --method debe estar entre 0 y 6")

    # si hay más de un input, forzamos output a carpeta
    if len(inputs) > 1 and output.exists() and output.is_file():
        raise SystemExit("Error: con múltiples inputs, output debe ser una carpeta.")
    if len(inputs) > 1 and not output.suffix:
        output.mkdir(parents=True, exist_ok=True)

    converted = 0
    skipped = 0
    errors = 0

    # recoge todos los pngs a convertir
    files_to_convert = []

    for inp in inputs:
        if inp.is_file():
            files_to_convert.append(inp)
        elif inp.is_dir():
            files_to_convert.extend(list(iter_png_files(inp, args.recursive)))
        else:
            print(f"[WARN] no existe: {inp}")

    if not files_to_convert:
        print("No se encontraron PNGs para convertir.")
        return

    single_input = (len(files_to_convert) == 1) and (len(inputs) == 1)

    for f in files_to_convert:
        try:
            if single_input and output.suffix.lower() == ".webp":
                target = output
            else:
                # output como carpeta: nombre.webp
                target_dir = output if output.is_dir() or not output.suffix else output.parent
                target = target_dir / (f.stem + ".webp")

            did = convert_png_to_webp(
                in_path=f,
                out_path=target,
                quality=args.quality,
                lossless=args.lossless,
                method=args.method,
                overwrite=args.overwrite
            )

            if did:
                converted += 1
                print(f"[OK] {f} -> {target}")
            else:
                skipped += 1
                print(f"[SKIP] existe: {target}")

        except Exception as e:
            errors += 1
            print(f"[ERROR] {f}: {e}")

    print("\nResumen:")
    print(f"- Convertidas: {converted}")
    print(f"- Omitidas: {skipped}")
    print(f"- Errores: {errors}")

if __name__ == "__main__":
    main()
