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
      }
      th,
      td {
        border-top: 1px solid rgb(222, 226, 230);
        line-height: 1.5;
        text-align: left;
        padding: 8px;
      }
      tr{
        background-color: var(--background-color, rgb(229, 240, 252))
      }
      thead > tr {
        border-bottom: 1px solid #ddd;
      }      

      @media screen and (max-width: 768px) {
        .no-mobile {
          display: none;
        }
        .app-table thead {
          display: none !important;
        }
        .app-table tr{
          display: flex !important;
          flex-direction: column;
          margin-bottom: 2rem;
          box-shadow: 0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);
        }
        .app-table tr td{
          display: flex !important;
          width: auto;
          justify-content: space-between;
          text-align: right;
          border-bottom: 1px solid #f5f5f5;
        }
        .app-table tr td::before {
            content: attr(data-label);
            font-weight: 600;
            padding-right: .5rem;
            text-align: left;
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
                  data-label=${key}
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
