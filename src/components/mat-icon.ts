import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getIcon } from "../assets/icons";

@customElement('mat-icon')
export class MatIcon extends LitElement {
    @property({ type: String }) icon = '';
    @property({ type: Number }) size = 24;

    static styles = css`
    host {
      display: inline-block;
      vertical-align: middle;
    }
    svg {
      fill: currentColor; /* inherits text colour */
    }
    `;


    render() {
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" height="${this.size}px" viewBox="0 -960 960 960" width="${this.size}px">
            <path d=${getIcon(this.icon)}/>
          </svg>
      `;
    }
}