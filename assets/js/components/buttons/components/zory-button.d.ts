import type { Components, JSX } from "../types/components";

interface ZoryButton extends Components.ZoryButton, HTMLElement {}
export const ZoryButton: {
  prototype: ZoryButton;
  new (): ZoryButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
