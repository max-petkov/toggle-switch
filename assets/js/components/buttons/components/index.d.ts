/* buttons custom elements */
export { ButtonCssEight as ButtonCssEight } from '../types/components/button-css-eight/button-css-eight';
export { ButtonCssEleven as ButtonCssEleven } from '../types/components/button-css-eleven/button-css-eleven';
export { ButtonCssFifteen as ButtonCssFifteen } from '../types/components/button-css-fifteen/button-css-fifteen';
export { ButtonCssFive as ButtonCssFive } from '../types/components/button-css-five/button-css-five';
export { ButtonCssFour as ButtonCssFour } from '../types/components/button-css-four/button-css-four';
export { ButtonCssFourteen as ButtonCssFourteen } from '../types/components/button-css-fourteen/button-css-fourteen';
export { ButtonCssMafanfa as ButtonCssMafanfa } from '../types/components/button-css-mafanfa/button-css-mafanfa';
export { ButtonCssNine as ButtonCssNine } from '../types/components/button-css-nine/button-css-nine';
export { ButtonCssOne as ButtonCssOne } from '../types/components/button-css-one/button-css-one';
export { ButtonCssSeven as ButtonCssSeven } from '../types/components/button-css-seven/button-css-seven';
export { ButtonCssSix as ButtonCssSix } from '../types/components/button-css-six/button-css-six';
export { ButtonCssSixteen as ButtonCssSixteen } from '../types/components/button-css-sixteen/button-css-sixteen';
export { ButtonCssTen as ButtonCssTen } from '../types/components/button-css-ten/button-css-ten';
export { ButtonCssThirteen as ButtonCssThirteen } from '../types/components/button-css-thirteen/button-css-thirteen';
export { ButtonCssThree as ButtonCssThree } from '../types/components/button-css-three/button-css-three';
export { ButtonCssTwelve as ButtonCssTwelve } from '../types/components/button-css-twelve/button-css-twelve';
export { ButtonCssTwo as ButtonCssTwo } from '../types/components/button-css-two/button-css-two.';
export { ButtonCssWave as ButtonCssWave } from '../types/components/button-css-wave/button-css-wave';
export { IgniteButtonCss as IgniteButtonCss } from '../types/components/ignite-button-css/ignite-button-css';
export { IgniteButtonJs as IgniteButtonJs } from '../types/components/ignite-button-js/ignite-button-js';
export { MagnetButton as MagnetButton } from '../types/components/magnet-button/magnet-button';
export { PaxCssButton as PaxCssButton } from '../types/components/pax-css-button/pax-css-button';
export { PaxJsButton as PaxJsButton } from '../types/components/pax-js-button/pax-js-button';
export { PaxJsButtonVariantOne as PaxJsButtonVariantOne } from '../types/components/pax-js-button-variant-one/pax-js-button-variant-one';
export { PaxJsButtonVariantTwo as PaxJsButtonVariantTwo } from '../types/components/pax-js-button-variant-two/pax-js-button-variant-two';
export { SendPotionButton as SendPotionButton } from '../types/components/send-potion-button/send-potion-button';
export { ZoryButton as ZoryButton } from '../types/components/zory-button/zory-button';

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
