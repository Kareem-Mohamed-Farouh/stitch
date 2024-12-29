
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/stitch/browser',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/stitch/browser"
  }
],
  assets: {
    'index.csr.html': {size: 6004, hash: 'c03b0662860eef04c57457a7bacca7e114c54352c9c0d1bab308f5aedc0f891b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1151, hash: '80b77a33cd1baf6d59a68bf08553fc5457b75d1fcf8f0fb0510e2b9fdd453f9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46801, hash: '976c47c3462b872428dd5ed1a56a3f4fe9d0efd81d245adc711e351d5b561954', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-47UI33GZ.css': {size: 305388, hash: 'w6EmiWjJCtE', text: () => import('./assets-chunks/styles-47UI33GZ_css.mjs').then(m => m.default)}
  },
};
