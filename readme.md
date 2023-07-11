# Reusable lit components

## Table component

1. The component requires two properties:

- columnConfig. This is representaion of your entity.
- data. List of data that should be displayed in a table

## Full example:

```js
import { LitElement, html, css } from "lit";

export class MovieList extends LitElement {
  static get properties() {
    return {
      tableConfig: { type: Object },
      data: { type: Array },
    };
  }

  constructor() {
    super();

    this.tableConfig = [
      {
        key: "name",
        label: "Name",
        formatter: (v) => v && v.slice(0, 10),
      },
      {
        key: "publishedYear",
        label: "published",
      },
      {
        key: "image",
        label: "Image",
        render: (item) => html`
          <div style="width: 50px; height: 50px; display: flex;">
            <img src=${item?.image}></media-component>
          </div>
        `,
      },
    ];

    this.data = [
      {
        name: "Rush hour 3",
        publishedYear: 2007,
        image:
          "https://e7.pngegg.com/pngimages/544/802/png-clipart-rush-hour-film-television-rush-tshirt-television-thumbnail.png",
      },
      {
        name: "Vanguard",
        publishedYear: 2021,
        image: "https://m.media-amazon.com/images/I/91415BMkZEL._AC_SY679_.jpg",
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <app-table
        .columnConfig=${this.tableConfig}
        .data=${this.data}
      ></app-table>
    `;
  }
}
customElements.define("movie-list", MovieList);
```
