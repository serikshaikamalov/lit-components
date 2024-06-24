import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";

class WYSIWYGEditor extends LitElement {
  static styles = css`
    .editor {
      border: 1px solid #ccc;
      padding: 10px;
      min-height: 150px;
      outline: none;
    }
    .toolbar {
      margin-bottom: 5px;
    }
    .toolbar button {
      margin-right: 5px;
    }
  `;

  static get properties() {
    return {
      content: { type: String },
      name: { type: String },
      onChange: { type: Function }
    };
  }

  constructor() {
    super();
    this.content = ''
    this.name = ''
    this.onChange = () => { }
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      const editor = this.renderRoot.querySelector('#editor')
      console.log("editor: ", editor);

      if (this.content) {
        editor.innerHTML = this.content
      }
    }, 1000);
  }

  render() {
    return html`
      <div class="toolbar">
        <button @click="${() => this.execCmd('bold')}">Bold</button>
        <button @click="${() => this.execCmd('italic')}">Italic</button>
        <button @click="${() => this.execCmd('underline')}">Underline</button>        
        <button @click="${() => this.execCmd('createLink', prompt('Enter the URL', 'http://'))}">Link</button>
      </div>
      <div
        id="editor"
        class="editor"
        contenteditable="true"
        name="editor"
        @input="${this._updateContent}"
      ></div>            
    `;
  }

  execCmd(command, value = null) {
    document.execCommand(command, false, value);
  }
  _updateContent(event) {
    this.content = event.target.innerHTML;
    if (this.onChange) {
      this.onChange(this.content, this.name)
    }
  }
}

customElements.define('wysiwyg-editor', WYSIWYGEditor);
