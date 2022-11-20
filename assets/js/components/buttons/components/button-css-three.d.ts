import type { Components, JSX } from "../types/components";

interface ButtonCssThree extends Components.ButtonCssThree, HTMLElement {}
export const ButtonCssThree: {
  prototype: ButtonCssThree;
  new (): ButtonCssThree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
