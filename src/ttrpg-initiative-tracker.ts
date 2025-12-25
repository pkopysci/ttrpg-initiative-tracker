import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { cardStyles } from "./styles"
import { defaultItems } from "./assets/default-items";
import "./components/mat-icon";
import "./components/table-row";

@customElement("ttrpg-initiative-tracker")
export class TtrpgInitiativeTracker extends LitElement {
  private _hass: any;

  @property({ type: Boolean, reflect: true }) darkMode = true;
  @property({ type: String }) title = 'Initiative Order';
  @property({ type: Number }) round = 1;
  @property({ type: Array }) items: {name:string, roll:number}[] = defaultItems;
  @property({ type: Number }) currentTurn = 0;

  @query('#new-name') private nameInput!: HTMLInputElement;
  @query('#new-roll') private rollInput!: HTMLInputElement;

  static styles = cardStyles;

  /** Home Assistant setter – unchanged */
  public set hass(hass: any) {
    this._hass = hass;
  }

  setConfig(config: any) {
    // Guard against a completely missing config object.
    if (!config) {
      console.warn("[ttrpg-initiative-tracker] No config supplied.");
      return;
    }

    if (config.items) {
      this.items = config.items.map((item: { name: string, roll: number }) => ({ name: item.name, roll: item.roll, editing: false }));
    }

    /**
     * Some integrations nest UI options under an `options` key, so we also
     * look there as a fallback.
     */
    const darkFromTop = typeof config.darkMode === "boolean" ? config.darkMode : undefined;
    const darkFromOpts =
      config.options && typeof config.options.darkMode === "boolean"
        ? config.options.darkMode
        : undefined;

    const resolvedDark = darkFromTop ?? darkFromOpts ?? this.darkMode;
    this.darkMode = resolvedDark;
  }

  private sortList = () => {
    this.items = [...this.items]
    .sort((a, b) => { return b.roll - a.roll });
  }

  private clearList = () => {
    this.items = [];
  }

  private setPreviousTurn = () => {
    let newTurn = this.currentTurn - 1;
    if (newTurn < 0) {
      this.round = (this.round === 1) ? 1 : this.round - 1;
      newTurn = this.items.length - 1; // wrap around
    }

    this.currentTurn = newTurn;
  }

  private setNextTurn = () => {
    let newTurn = this.currentTurn + 1;
    if (newTurn >= this.items.length) {
      this.round++;
      newTurn = 0;
    }

    this.currentTurn = newTurn;
  }

  private removeItem = (data: any) => {
    console.log('removeItem()')
    console.log(data);

    this.items = this.items.filter(x => this.items.indexOf(x) !== data.detail.index);
  }

  private addItem = () => {
    if (!this.nameInput || !this.rollInput) return;

    const name = this.nameInput.value.trim();
    const rollStr = this.rollInput.value.trim();
    if (!name || !rollStr) return;

    const roll = Number(rollStr);
    if (Number.isNaN(roll)) return;

    const newItem = { name: name, roll: roll, editing: false };
    this.items = [...this.items, newItem]

    this.nameInput.value = '';
    this.rollInput.value = '';
  }

  private editItem = (data: any) => {

    console.log('editItem');

    let index = data.detail.index;
    let name = data.detail.name;
    let roll = data.detail.roll;

    if (index < 0 || index >= this.items.length || !name || roll < 0) return;
    const updated = {...this.items[index], name, roll};
    const newList = [...this.items];
    newList[index] = updated;
    this.items = newList;
  }

  private showTable = () => {
    if (this.items.length === 0) {
      return html`
        <div class="empty-notice">
          <p>So quiet...</p>
        </div>
      `;
    } else {
      return html`
      <div class='table'>
          <div class="table-header row">
            <span></span>
            <span>Name</span>
            <span>Roll</span>
            <span></span>
          </div>

          ${this.items.map((item, index) => html`
              <table-row
              name=${item.name}
              roll=${item.roll}
              index=${index}
              ?activeturn=${this.currentTurn === index}
              @onDelete=${this.removeItem}
              @onEdit=${this.editItem}></table-row>
          `)}
        </div>
      `
    }
  }

  protected render() {
    return html`
    <div class="init-card">
      <div class="header">
        <span class="title-span">
          <mat-icon icon="swords" size=25></mat-icon>
          <h1>${this.title}</h1>
        </span>
        <span class="round-counter">
          Round: ${this.round}
        </span>
      </div>

      <div class='content'>
        
        ${this.showTable()}

        <div class="add-turn-section">
          <input type="text" id="new-name" placeholder="Name" />
          <input type="number" id="new-roll" placeholder="Roll" />
          <button @click=${this.addItem}>
            <mat-icon icon="add"></mat-icon>
          </button>
        </div>

        <div class="round-controls">
          <span>
            <button @click=${this.setPreviousTurn}>
              <mat-icon icon="left"></mat-icon>
            </button>
            <button @click=${this.setNextTurn}>
              <mat-icon icon="right"></mat-icon>
            </button>
          </span>
          <span>
            <button @click=${this.sortList}>
              <mat-icon icon="sort"></mat-icon>
              Sort
            </button>
            <button @click=${this.clearList}>
              <mat-icon icon="reset"></mat-icon>
              Reset
            </button>
          </span>
        </div>

      </div>
    </div>
    `;
  }
}