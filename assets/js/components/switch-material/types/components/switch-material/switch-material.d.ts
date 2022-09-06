import { EventEmitter } from '../../stencil-public-runtime';
export declare class SwitchMaterial {
  checkbox: HTMLInputElement;
  switch: string;
  disabled: boolean;
  theme: string;
  el: HTMLElement;
  onSwitch: EventEmitter<object>;
  onSwitchHandler(): void;
  componentDidLoad(): void;
  render(): any;
}
