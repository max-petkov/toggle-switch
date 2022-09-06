import { p as promiseResolve, b as bootstrapLazy } from './index-055e2621.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["switch-material",[[1,"switch-material",{"switch":[1537],"disabled":[1540],"theme":[1537]}]]]], options);
  });
};

export { defineCustomElements };
