import type { Components, JSX } from "../types/components";

interface ButtonCssTwelve extends Components.ButtonCssTwelve, HTMLElement {}
export const ButtonCssTwelve: {
  prototype: ButtonCssTwelve;
  new (): ButtonCssTwelve;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
