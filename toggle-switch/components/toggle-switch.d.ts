import type { Components, JSX } from "../types/components";

interface ToggleSwitch extends Components.ToggleSwitch, HTMLElement {}
export const ToggleSwitch: {
  prototype: ToggleSwitch;
  new (): ToggleSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
