import type { Components, JSX } from "../types/components";

interface PaxJsButton extends Components.PaxJsButton, HTMLElement {}
export const PaxJsButton: {
  prototype: PaxJsButton;
  new (): PaxJsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
