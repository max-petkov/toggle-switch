import { EventEmitter } from '../../stencil-public-runtime';
export declare class ToggleSwitch {
  checkbox: HTMLInputElement;
  switch: string;
  disabled: boolean;
  el: HTMLElement;
  onSwitch: EventEmitter<object>;
  onSwitchHandler(): void;
  componentDidLoad(): void;
  render(): any;
}
