import type { Components, JSX } from "../types/components";

interface ButtonCssOne extends Components.ButtonCssOne, HTMLElement {}
export const ButtonCssOne: {
  prototype: ButtonCssOne;
  new (): ButtonCssOne;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
