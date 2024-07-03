# Reusable lit components

## WYSIWYG HTML Editor

Demo: [WYSIWYG Editor](https://serikshaikamalov.github.io/lit-components/examples/wysiwyg-editor/index.html)

HTML editor is a tool that allows users to create and edit web content in a way that shows how the final product will appear.
<img width="1440" alt="image" src="https://github.com/serikshaikamalov/lit-components/assets/11631958/662948e4-483a-4052-8ec6-c8f0771751c4">

Key Features of WYSIWYG:

- Text Formatting: Bold, italic, underline, font size
- Links: Ability to add and edit hyperlinks.
- Lists: Ordered (numbered) and unordered (bullet) lists.

## Table component

Demo: [Reusable table component](https://serikshaikamalov.github.io/lit-components/examples/app-table/index.html)

This reusable table component is simple and can be expanded with additional features like sorting, filtering, and pagination. The component is designed to be flexible, allowing it to be used in various parts of an application with different data sets and columns.

- Desktop view
  <img width="1440" alt="image" src="https://github.com/serikshaikamalov/lit-components/assets/11631958/e3434624-fdf1-4523-b46d-3d82fbf74b94">

- Mobile/Tablet view
  <img width="500" src="https://github.com/serikshaikamalov/lit-components/assets/11631958/b4c384ad-a266-4079-a0cb-a94ed8fdd395"/>

The component requires two properties:

- columnConfig. This is representaion of your entity.
- data. List of data that should be displayed in table

## Usage:

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
    return html` <app-table .columnConfig=${this.tableConfig} .data=${this.data}></app-table> `;
  }
}
customElements.define("movie-list", MovieList);
```

In this example:

tableConfig defines the columns with optional formatter and render functions.
data contains the rows of the table.
