import { p as promiseResolve, b as bootstrapLazy } from './index-055e2621.js';

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
  return bootstrapLazy([["toggle-switch",[[1,"toggle-switch",{"switch":[1537],"disabled":[1540]}]]]], options);
});
