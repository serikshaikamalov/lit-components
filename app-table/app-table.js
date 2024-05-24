import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";

const get = (item, keyArrayAsString) => {
  if (!keyArrayAsString) return;
  const keys = keyArrayAsString.split(".");
  const key = keys.shift();

  if (keys.length === 0) {
    return item[key];
  }

  return get(item[key], keys.join("."));
};

export class AppTable extends LitElement {
  static styles = [
    css`    
      .app-table {        
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
        background-color: var(--background-color, rgb(229, 240, 252))
      }
      th,
      td {
        border-top: 1px solid rgb(222, 226, 230);
        line-height: 1.5;
        text-align: left;
        padding: 8px;
      }

      thead > tr {
        border-bottom: 1px solid #ddd;
      }

      @media screen and (max-width: 768px) {
        .no-mobile {
          display: none;
        }
      }
    `,
  ];

  static get properties() {
    return {
      // inputs
      columnConfig: { type: Array },
      data: { type: Array },
      hideColumnsOnMobile: { type: Array },
    };
  }
  constructor() {
    super();
    this.columnConfig = [];
    this.data = [];
    this.hideColumnsOnMobile = [];
  }
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    if (!this.data || this.data.length == 0) {
      return html`<div>NO DATA</div>`;
    }

    return html`
      <table class="app-table">
        <thead>
          <tr>
            ${this.columnConfig.map(({ label, key }) => {
      return html`<th
                class=${this.hideColumnsOnMobile.includes(key)
          ? "no-mobile"
          : ""}
              >
                ${label}
              </th>`;
    })}
          </tr>
        </thead>
        <tbody>
          ${this.data.map((item, index) => {
      return html`<tr>
              ${this.columnConfig.map(({ key, label, formatter, render }) => {
        return html`<td
                  class=${this.hideColumnsOnMobile.includes(key)
            ? "no-mobile"
            : ""}
                >
                  ${render
            ? render(item, index)
            : typeof formatter === "function"
              ? formatter(get(item, key))
              : get(item, key)}
                </td>`;
      })}
            </tr>`;
    })}
        </tbody>
      </table>
    `;
  }
}
customElements.define("app-table", AppTable);
