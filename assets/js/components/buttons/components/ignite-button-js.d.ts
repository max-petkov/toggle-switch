import type { Components, JSX } from "../types/components";

interface IgniteButtonJs extends Components.IgniteButtonJs, HTMLElement {}
export const IgniteButtonJs: {
  prototype: IgniteButtonJs;
  new (): IgniteButtonJs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
