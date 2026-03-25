export type ImageMetadata = {
  src: string;
  width?: number;
  height?: number;
  mimeType?: string;
};

export function getImageMetadata(source: string | undefined | null): ImageMetadata | undefined;
