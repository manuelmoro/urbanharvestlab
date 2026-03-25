import { getImageMetadata } from '../src/utils/image-metadata.js';

function visit(node, callback) {
  callback(node);

  if (!node || typeof node !== 'object' || !Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    visit(child, callback);
  }
}

export default function rehypeLocalImageDimensions() {
  return (tree) => {
    visit(tree, (node) => {
      if (node?.type !== 'element' || node.tagName !== 'img') {
        return;
      }

      const properties = node.properties ?? {};
      const src = typeof properties.src === 'string' ? properties.src : '';

      if (!src.startsWith('/')) {
        node.properties = properties;
        return;
      }

      const metadata = getImageMetadata(src);

      if (metadata?.width && !properties.width) {
        properties.width = metadata.width;
      }

      if (metadata?.height && !properties.height) {
        properties.height = metadata.height;
      }

      if (!properties.loading) {
        properties.loading = 'lazy';
      }

      if (!properties.decoding) {
        properties.decoding = 'async';
      }

      node.properties = properties;
    });
  };
}
