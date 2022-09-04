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
  return index.bootstrapLazy([["toggle-switch.cjs",[[1,"toggle-switch",{"switch":[1537],"disabled":[1540]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
