import type { Components, JSX } from "../types/components";

interface ButtonCssWave extends Components.ButtonCssWave, HTMLElement {}
export const ButtonCssWave: {
  prototype: ButtonCssWave;
  new (): ButtonCssWave;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
