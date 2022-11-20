import { EventEmitter } from '../../stencil-public-runtime';
export declare class MagnetButton {
  htmlSource: string;
  cssSource: string;
  jsSource: string;
  el: HTMLElement;
  highlightCode: EventEmitter<string>;
  getSourceHandler(event: CustomEvent): void;
  animate(): void;
  componentDidLoad(): void;
  render(): any;
}
