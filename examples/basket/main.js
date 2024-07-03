import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";
import basketStorage from './basketStorage.js'

export class Basket extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
        };
    }

    constructor() {
        super()
    }

    connectedCallback() {
        super.connectedCallback();
        basketStorage.addEventListener("updated", (i) => {
            console.log("Updated");
            this.items = basketStorage.getItems()
        })
    }

    submit(e) {
        e.preventDefault()

        const searchNode = this.renderRoot.querySelector('#search')
        if (searchNode) {
            const v = searchNode.value
            basketStorage.addItem(v)
        }
        searchNode.value = ""
    }

    remove(i) {
        basketStorage.removeItem(i)
    }

    render() {
        return html`
            <form @submit=${this.submit}>
                <div>
                    <input type="text" id="search"/>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    ${this.items ? html`${this.items.map(i => {
            return html`<div>${i} <button type="button" @click=${() => this.remove(i)}>remove</button></div>`
        })}` : html`<h2>No items</h2>`}
                </div>
            </form>
        `;
    }
}
customElements.define('app-basket', Basket);
