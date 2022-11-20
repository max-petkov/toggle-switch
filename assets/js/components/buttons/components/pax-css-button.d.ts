import type { Components, JSX } from "../types/components";

interface PaxCssButton extends Components.PaxCssButton, HTMLElement {}
export const PaxCssButton: {
  prototype: PaxCssButton;
  new (): PaxCssButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
