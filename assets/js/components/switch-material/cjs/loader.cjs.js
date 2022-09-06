'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-491299fc.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["switch-material.cjs",[[1,"switch-material",{"switch":[1537],"disabled":[1540],"theme":[1537]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
