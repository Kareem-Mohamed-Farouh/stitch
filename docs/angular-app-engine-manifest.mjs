
export default {
  basePath: '/stitch/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
