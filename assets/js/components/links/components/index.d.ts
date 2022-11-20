/* links custom elements */
export { LinkCssEight as LinkCssEight } from '../types/components/link-css-eight/link-css-eight';
export { LinkCssFive as LinkCssFive } from '../types/components/link-css-five/link-css-five';
export { LinkCssFour as LinkCssFour } from '../types/components/link-css-four/link-css-four';
export { LinkCssNine as LinkCssNine } from '../types/components/link-css-nine/link-css-nine';
export { LinkCssOne as LinkCssOne } from '../types/components/link-css-one/link-css-one';
export { LinkCssSeven as LinkCssSeven } from '../types/components/link-css-seven/link-css-seven';
export { LinkCssSix as LinkCssSix } from '../types/components/link-css-six/link-css-six';
export { LinkCssThree as LinkCssThree } from '../types/components/link-css-three/link-css-three';
export { LinkCssTwo as LinkCssTwo } from '../types/components/link-css-two/link-css-two';
export { MafanfaLink as MafanfaLink } from '../types/components/mafanfa-link/mafanfa-link';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
