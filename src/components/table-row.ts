import { LitElement, html, nothing } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { cardStyles } from "../styles";

@customElement('table-row')
export class TableRow extends LitElement {
    @property({ type: Boolean }) activeTurn = false;
    @property({ type: String }) name = '';
    @property({ type: Number }) roll = 0;
    @property({ type: Number }) index = 0;
    @property({ type: Boolean, attribute: false }) inEditMode: Boolean = false;

    static styles = cardStyles;

      @query('#name-input') private nameInput!: HTMLInputElement;
      @query('#roll-input') private rollInput!: HTMLInputElement;

    private onDelete = () => {
        this.dispatchEvent(
            new CustomEvent('onDelete', {
                bubbles: true,
                composed: true,
                detail: {
                    index: this.index
                }
            })
        );
    };

    private enterEditMode = () => { this.inEditMode = true; }
    private cancelEditMode = () => { this.inEditMode = false; }
    private confirmEdit = () => {
        this.inEditMode = false;
        if (!this.nameInput || !this.rollInput) return;

        this.dispatchEvent(new CustomEvent('onEdit', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index,
                name: this.nameInput.value,
                roll: Number(this.rollInput.value)
            }
        }));
    }

    render() {

        if (this.inEditMode) {
            return html`
            <div class="row">
                <span>
                    ${this.activeTurn ? html`<mat-icon icon="swords" size=20></mat-icon>` : nothing}
                </span>
                <input id='name-input' type="text" value=${this.name} />
                <input id='roll-input'  type="number" value=${this.roll} />
                <span style="display: flex; gap: 20;">
                    <button @click=${this.confirmEdit}>
                        <mat-icon icon="check"></mat-icon>
                    </button>
                    <button @click=${this.cancelEditMode}>
                    <mat-icon icon="cancel"></mat-icon>
                    </button>
                </span>
            </div>
            `;

        } else {
            return html`
            <div class="row">
                <span>
                ${this.activeTurn ? html`<mat-icon icon="swords" size=20></mat-icon>` : nothing}
                </span>
                <span>${this.name}</span>
                <span>${this.roll}</span>
                <span style="display: flex; gap: 20;">
                    <button @click=${this.enterEditMode}>
                        <mat-icon icon="edit"></mat-icon>
                    </button>
                    <button @click=${this.onDelete}>
                    <mat-icon icon="trashcan" size=20></mat-icon>
                    </button>
                </span>
            </div>
            `;
        }
    }
}