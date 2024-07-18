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
    }

    connectedCallback() {
        super.connectedCallback();

        setTimeout(() => {
            this.content = `asd <b>Serik</b> <i>Berik<br><br><br></i>`
        }, 2000);
    }

    onChange(v) {
        const el = this.renderRoot.querySelector('#bio')
        if (el) {
            el.value = v
        }
    }

    submit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        console.log("formProps: ", formProps);
    }

    render() {
        return html`
            <div>
                <form @submit=${this.submit}>                                        
                    <wysiwyg-editor inputmode name="bio" .content=${this.content} .onChange=${this.onChange.bind(this)}>                        
                    </wysiwyg-editor>                    
                    <input type="hidden" id="bio" name="bio"/>
                    <button type="submit">Submit</button>
                </form>                
            </div>
        `
    }
}


customElements.define('wysiwyg-editor-example', WYSIWYGEditorExample);