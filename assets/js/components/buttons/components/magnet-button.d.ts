import type { Components, JSX } from "../types/components";

interface MagnetButton extends Components.MagnetButton, HTMLElement {}
export const MagnetButton: {
  prototype: MagnetButton;
  new (): MagnetButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
