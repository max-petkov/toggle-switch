import type { Components, JSX } from "../types/components";

interface SendPotionButton extends Components.SendPotionButton, HTMLElement {}
export const SendPotionButton: {
  prototype: SendPotionButton;
  new (): SendPotionButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
