import { EventEmitter } from '../../stencil-public-runtime';
export declare class MafanfaLink {
  el: HTMLElement;
  htmlSource: string;
  cssSource: string;
  jsSource: string;
  highlightCode: EventEmitter<string>;
  getSourceHandler(event: CustomEvent): void;
  splitText(props: any): void;
  componentDidLoad(): void;
  render(): any;
}
