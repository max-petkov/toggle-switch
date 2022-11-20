import type { Components, JSX } from "../types/components";

interface LinkCssOne extends Components.LinkCssOne, HTMLElement {}
export const LinkCssOne: {
  prototype: LinkCssOne;
  new (): LinkCssOne;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
