import type { Components, JSX } from "../types/components";

interface ButtonCssTen extends Components.ButtonCssTen, HTMLElement {}
export const ButtonCssTen: {
  prototype: ButtonCssTen;
  new (): ButtonCssTen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
