import type { Components, JSX } from "../types/components";

interface ButtonCssTwo extends Components.ButtonCssTwo, HTMLElement {}
export const ButtonCssTwo: {
  prototype: ButtonCssTwo;
  new (): ButtonCssTwo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
