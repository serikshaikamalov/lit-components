import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";
import '../../components/wysiwyg-editor.js'

class WYSIWYGEditorExample extends LitElement {

    static get properties() {
        return {
            content: { type: String },
        };
    }

    constructor() {
        super()
        this.content = 'asd <b>Serik</b> <i>Berik<br><br><br></i>'
    }

    connectedCallback() {
        super.connectedCallback();
    }

    onChange(v) {
        console.log("V: ", v);
    }

    render() {
        return html`
            <div>
                <wysiwyg-editor .name=${"bio"} .content=${this.content} .onChange=${this.onChange}></wysiwyg-editor>
            </div>
        `
    }
}


customElements.define('wysiwyg-editor-example', WYSIWYGEditorExample);