import { defineConfig } from 'astro/config';

import rehypeLocalImageDimensions from './plugins/rehype-local-image-dimensions.mjs';

export default defineConfig({
  site: 'https://urbanharvestlab.com',
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [rehypeLocalImageDimensions],
  },
});
