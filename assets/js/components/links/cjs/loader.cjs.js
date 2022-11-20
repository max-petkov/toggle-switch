'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3d7575e9.js');

/*
 Stencil Client Patch Esm v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["link-css-eight_10.cjs",[[1,"link-css-eight",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-five",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-four",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-nine",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-one",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-seven",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-six",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-three",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-two",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"mafanfa-link",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
