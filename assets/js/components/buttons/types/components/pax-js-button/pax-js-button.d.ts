import { EventEmitter } from '../../stencil-public-runtime';
export declare class PaxJsButton {
  htmlSource: string;
  cssSource: string;
  jsSource: string;
  el: HTMLElement;
  highlightCode: EventEmitter<string>;
  getSourceHandler(event: CustomEvent): void;
  animate(): void;
  enterAnimation(): void;
  leaveAnimation(): void;
  componentDidLoad(): void;
  render(): any;
}
