import type { Components, JSX } from "../types/components";

interface SwitchMaterial extends Components.SwitchMaterial, HTMLElement {}
export const SwitchMaterial: {
  prototype: SwitchMaterial;
  new (): SwitchMaterial;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
