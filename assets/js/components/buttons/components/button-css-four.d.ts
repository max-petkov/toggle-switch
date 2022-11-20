import type { Components, JSX } from "../types/components";

interface ButtonCssFour extends Components.ButtonCssFour, HTMLElement {}
export const ButtonCssFour: {
  prototype: ButtonCssFour;
  new (): ButtonCssFour;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
