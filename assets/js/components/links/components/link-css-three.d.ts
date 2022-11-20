import type { Components, JSX } from "../types/components";

interface LinkCssThree extends Components.LinkCssThree, HTMLElement {}
export const LinkCssThree: {
  prototype: LinkCssThree;
  new (): LinkCssThree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
