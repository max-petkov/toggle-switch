import type { Components, JSX } from "../types/components";

interface ButtonCssEleven extends Components.ButtonCssEleven, HTMLElement {}
export const ButtonCssEleven: {
  prototype: ButtonCssEleven;
  new (): ButtonCssEleven;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
