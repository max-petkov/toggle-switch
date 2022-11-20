import type { Components, JSX } from "../types/components";

interface MafanfaLink extends Components.MafanfaLink, HTMLElement {}
export const MafanfaLink: {
  prototype: MafanfaLink;
  new (): MafanfaLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
