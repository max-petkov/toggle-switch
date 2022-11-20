import { EventEmitter } from '../../stencil-public-runtime';
export declare class LinkCssFour {
  htmlSource: string;
  cssSource: string;
  jsSource: string;
  el: HTMLElement;
  highlightCode: EventEmitter<string>;
  getSourceHandler(event: CustomEvent): void;
  render(): any;
}
