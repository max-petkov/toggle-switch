import { p as promiseResolve, b as bootstrapLazy } from './index-8311e275.js';

/*
 Stencil Client Patch Browser v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["button-css-eight",[[1,"button-css-eight",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-eleven",[[1,"button-css-eleven",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-fifteen",[[1,"button-css-fifteen",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-five",[[1,"button-css-five",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-four",[[1,"button-css-four",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-fourteen",[[1,"button-css-fourteen",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-mafanfa",[[1,"button-css-mafanfa",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-nine",[[1,"button-css-nine",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-one",[[1,"button-css-one",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-seven",[[1,"button-css-seven",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-six",[[1,"button-css-six",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-sixteen",[[1,"button-css-sixteen",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-ten",[[1,"button-css-ten",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-thirteen",[[1,"button-css-thirteen",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-three",[[1,"button-css-three",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-twelve",[[1,"button-css-twelve",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-two",[[1,"button-css-two",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["button-css-wave",[[1,"button-css-wave",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["ignite-button-css",[[1,"ignite-button-css",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["ignite-button-js",[[1,"ignite-button-js",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["magnet-button",[[1,"magnet-button",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["pax-css-button",[[1,"pax-css-button",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["pax-js-button",[[1,"pax-js-button",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["pax-js-button-variant-one",[[1,"pax-js-button-variant-one",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["pax-js-button-variant-two",[[1,"pax-js-button-variant-two",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["send-potion-button",[[1,"send-potion-button",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]],["zory-button",[[1,"zory-button",{"htmlSource":[1,"html-source"],"cssSource":[1,"css-source"],"jsSource":[1,"js-source"]},[[16,"getSource","getSourceHandler"]]]]]], options);
});
