import type { Components, JSX } from "../types/components";

interface ButtonCssEight extends Components.ButtonCssEight, HTMLElement {}
export const ButtonCssEight: {
  prototype: ButtonCssEight;
  new (): ButtonCssEight;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
