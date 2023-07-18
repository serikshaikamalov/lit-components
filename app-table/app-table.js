import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";

/**
 Find value in an object by key
 let item = {
    work: {
        id: 1
    }
 }
 */
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
      :host {
        display: block;
      }
      .app-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
      }
      th,
      td {
        border: none;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
        color: black;
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
      columnConfig: { type: Array },
      data: { type: Array },

      columnHeaders: { type: Array },
      hideColumnsOnMobile: { type: Array },
    };
  }

  constructor() {
    super();

    this.columnConfig = [];
    this.data = [];
    this.columnHeaders = [];
    this.hideColumnsOnMobile = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.columnHeaders = this.columnConfig.map((x) => x.label);
  }

  render() {
    if (!this.data || this.data.length == 0) {
      return html`<div>NO DATA</div>`;
    }

    return html`
      <table class="app-table">
        <thead>
          <tr>
            ${this.columnHeaders.map((header) => {
              return html`<th>${header}</th>`;
            })}
          </tr>
        </thead>
        <tbody>
          ${this.data.map((item) => {
            return html`<tr>
              ${this.columnConfig.map(({ key, label, formatter, render }) => {
                return html`<td
                  class=${this.hideColumnsOnMobile.includes(key)
                    ? "no-mobile"
                    : ""}
                >
                  ${render
                    ? render(item)
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
