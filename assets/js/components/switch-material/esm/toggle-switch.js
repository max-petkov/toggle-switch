import { p as promiseResolve, b as bootstrapLazy } from './index-f9b43965.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["switch-material",[[1,"switch-material",{"switch":[1537],"disabled":[1540],"theme":[1537]}]]]], options);
});
