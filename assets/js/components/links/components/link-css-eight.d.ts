import type { Components, JSX } from "../types/components";

interface LinkCssEight extends Components.LinkCssEight, HTMLElement {}
export const LinkCssEight: {
  prototype: LinkCssEight;
  new (): LinkCssEight;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
