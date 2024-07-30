import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";
import { get, toCamelCase } from "../utils/utils.js";

export class AppTable extends LitElement {
  static styles = [
    css`
      a {
        color: inherit;
        text-decoration: none;
      }    
      .app-table {        
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;         
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
      td{
        font-weight: normal
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
      options: { type: Object }
    };
  }
  constructor() {
    super();
    this.columnConfig = [];
    this.data = [];
    this.hideColumnsOnMobile = [];
    this.options = null
  }
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    if (!this.data || this.data.length == 0) {
      return this.options && this.options['noDataText'] ? html`<div>${this.options['noDataText']}</div>` : html`<div>NO DATA</div>`;
    }

    return html`
      <table class="app-table">
        <thead>
          <tr>
            ${this.columnConfig.map(({ label, key }) => {
      if (!key) {
        key = toCamelCase(label)
      }
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
        if (!key) {
          key = toCamelCase(label)
        }
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
