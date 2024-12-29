
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/stitch/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/stitch"
  }
],
  assets: {
    'index.csr.html': {size: 5997, hash: '0890b235b5c1ba7eeff90b990fcb309619f22b314e277db99d416e21ebd92366', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1144, hash: 'b81ab11d8373993a1117eef87d644ea74b77f888925695331b83872bb8b0fdcf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46246, hash: '7bc4fd25d9ae9f1f76b9b77b31dcfc05b709f861b2a8eba7e8225e05c65c8ac5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-47UI33GZ.css': {size: 305388, hash: 'w6EmiWjJCtE', text: () => import('./assets-chunks/styles-47UI33GZ_css.mjs').then(m => m.default)}
  },
};
