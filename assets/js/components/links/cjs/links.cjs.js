'use strict';

const index = require('./index-3d7575e9.js');

/*
 Stencil Client Patch Browser v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('links.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["link-css-eight_10.cjs",[[1,"link-css-eight",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-five",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-four",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-nine",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-one",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-seven",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-six",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-three",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"link-css-two",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]],[1,"mafanfa-link",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]]], options);
});
