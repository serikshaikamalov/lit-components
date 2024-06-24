import {
    html,
    LitElement,
    css
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import '../../app-table/app-table.js'

export class UsersList extends LitElement {

    static get properties() {
        return {
            columnConfig: { type: Object },
            data: { type: Object }
        };
    }

    static styles = [
        css`      
        `
    ]

    constructor() {
        super()
        this.columnConfig = [
            {
                key: "email",
                label: "Email",
            },
            {
                key: "name",
                label: "Name",
            },
            {
                key: "role",
                label: "Role",
            },
            {
                label: "Created At",
                formatter: (v) => new Date(v).toLocaleString()
            }
        ]

        this.data = [
            {
                email: "serik.shaikamalov@gmail.com",
                name: "Serik",
                role: "Admin",
                createdAt: new Date("1991-05-26")
            },
            {
                email: "arailym@gmail.com",
                name: "Arailym",
                role: "Editor",
                createdAt: new Date("1991-05-26")
            },
            {
                email: "ostin@mail.com",
                name: "Ostin",
                role: "Moderator",
                createdAt: new Date("1991-05-26")
            }
        ]
    }

    render() {
        return html`<h2>
        <app-table .columnConfig=${this.columnConfig} .data=${this.data} style=${"--background-color: var(--md-sys-color-surface)"}></app-table>        
      </h2>`;
    }
}
customElements.define("user-list", UsersList);