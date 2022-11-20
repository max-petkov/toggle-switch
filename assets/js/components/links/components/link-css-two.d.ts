import type { Components, JSX } from "../types/components";

interface LinkCssTwo extends Components.LinkCssTwo, HTMLElement {}
export const LinkCssTwo: {
  prototype: LinkCssTwo;
  new (): LinkCssTwo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
