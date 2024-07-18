import {
    html,
    LitElement,
    css
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { snack } from '../../components/snack/snack-bar.js';

export class SnackExample extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    onClick() {
        const randomTexts = [
            `{"Message":"The request is invalid.","ModelState":{"request.AdditionalWarrantyInMonths":["Not valid for a 18 year care pack. If ordering One Zone controller is requested OneZoneControllerColour must be set, if boiler is System or Regular ThreePortValveKitSizeInMMs."]}}`,
            `Hello world`
        ]

        const randomIndex = Math.round(Math.random() * 10) > 5 ? 0 : 1;
        snack(randomTexts[randomIndex], { duration: 100 * 1000 })
    }

    render() {
        return html`<div>
            <h1>Testing snack</h1>
            <button @click=${this.onClick}>Alert</button>            
        </div>`;
    }
}
customElements.define('snack-example', SnackExample);
