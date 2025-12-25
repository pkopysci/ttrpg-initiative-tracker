import { css } from 'lit';

export const cardStyles = css`
    :host {
      /* Light‑mode defaults */
      --primary-background-color: #ffffff;
      --secondary-background-color: #c1c2c2;
      --card-background-color: #f0f0f0;
      --primary-text-color: #2e2828;
      --secondary-text-color: #5f5f5f;
      --divider-color: #ced0da;
      --button-color-idle: #009ac7;
      --button-color-focus: #005f7c;
      --button-color-text: #f0f0f0;

      font-family: sans-serif;
    }

    /* Dark‑mode overrides */
    :host([darkmode]) {
      --primary-background-color: #000000;
      --secondary-background-color: #313131;
      --card-background-color: #181717;
      --primary-text-color: #FFFFFF;
      --secondary-text-color: #909495;
      --divider-color: #3f3f3f;

      font-family: sans-serif;
    }

    h1 {
      font-size: 1.5rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1em;
      border: none;
      margin: 0;
      padding: 10px;
      border-radius: 20px;
      color: var(--button-color-text);
      background-color: var(--button-color-idle);
    }
    button:hover {
      background-color: var(--button-color-focus);
      cursor: pointer;
    }

    input {
      border: solid 1px var(--divider-color);
      background-color: var(--secondary-background-color);
      font-size: 1rem;
      color: var(--primary-text-color);
    }

    .init-card {
      display:flex;
      gap: 20px;
      flex-direction: column;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      padding: 20px;
      border: solid 1px var(--divider-color);
      border-radius: 10px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between
    }

    .title-span {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .round-counter {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: var(--secondary-background-color);
      border-radius: 10px;
    }

    .empty-notice {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border: solid 1px var(--divider-color);
      border-radius: 10px;
      color: var(--secondary-text-color);
    }

    .table-header {
      font-weight: bold;
    }
    .row {
      display: grid;
      grid-template-columns: 10% 40% 20% 30%;
      padding: 10px 0 ;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid var(--divider-color);
    }
    .row input {
      padding: 10px;
    }
    .row button {
      width: 50px;
      height: 50px;
      background: none;
      color: var(--button-color-idle);
    }

    .add-turn-section {
      display: flex;
      gap: 10px;
      justify-content: space-between;
    }
    .add-turn-section input {
      flex-grow: 1;
    }

    .round-controls {
      display: flex;
      flex-direction: column;
    }
    .round-controls span {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      gap: 20px;
    }
    .round-controls button {
      flex-grow: 1;
      max-width: 300px;
    }

    @media(max-width: 530px) {
      .add-turn-section {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
      }
      .add-turn-section input {
        width: 75%;
        height: 35px;
      }
      .add-turn-section button {
        width: 50%;
      }
    }
  `;