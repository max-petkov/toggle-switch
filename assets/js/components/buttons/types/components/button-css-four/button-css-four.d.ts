import { EventEmitter } from '../../stencil-public-runtime';
export declare class ButtonCssFour {
  htmlSource: string;
  cssSource: string;
  jsSource: string;
  el: HTMLElement;
  highlightCode: EventEmitter<string>;
  getSourceHandler(event: CustomEvent): void;
  render(): any;
}
