
export default {
  basePath: '/stitch/browser',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
