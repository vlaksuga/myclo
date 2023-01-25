export class AppContainer extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('app-container', AppContainer);