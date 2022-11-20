import type { Components, JSX } from "../types/components";

interface IgniteButtonCss extends Components.IgniteButtonCss, HTMLElement {}
export const IgniteButtonCss: {
  prototype: IgniteButtonCss;
  new (): IgniteButtonCss;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
