import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";

/**
 * Features:
 * - Closing the snack
 * - Fixed long text issue
 */
export function snack(message, { duration = 3000 } = {}) {
    let snack = document.createElement('snack-bar')
    snack.message = message
    snack.duration = duration
    document.body.appendChild(snack)
    snack.show()
}

class SnackBar extends LitElement {
    static styles = css`
    #snackbar {           
        min-width: 250px;        
        background-color: var(--md-sys-color-inverse-surface, #333);
        color: var(--md-sys-color-inverse-on-surface, white);
        text-align: center;
        border-radius: 4px;
        padding: 12px 20px;
        position: fixed;
        z-index: 1000;
        left: 50%;
        bottom: 30px;  
        transform: translate(-50%, -50%);
    }
    .close-button{
        cursor: pointer;
        position: absolute;
        right: 10px;        
        font-size: 0.8rem;
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }
    @keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
    `

    static properties = {
        message: { type: String },
        showing: { type: Boolean },
        duration: { type: Number },
    }
    constructor() {
        super()
        this.message = ""
        this.showing = false
        this.duration = 3000
    }

    render() {
        if (!this.showing) return ''
        let animStyle = `animation: fadein 0.5s, fadeout 0.5s ${this.duration}ms forwards;`
        return html`
            <div id="snackbar" class="show" style="${animStyle}">
                <span class="close-button" @click=${this.close}>x</span>
                ${this.message}
            </div>
        `
    }
    show() {
        this.showing = true
        setTimeout(() => { this.close() }, this.duration + 500)
    }
    close() {
        this.showing = false
    }
}

customElements.define('snack-bar', SnackBar)