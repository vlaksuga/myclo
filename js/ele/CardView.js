
import { BaseElement } from "./BaseElement.js";
import { ImageView } from "./ImageView.js";
import { CaptionView } from "./CaptionView.js";

export class CardView extends BaseElement {

    constructor() {
        super();
    }

    static get observedAttributes() { return ["src", "caption"]; }

    render() {
        super.render();
        this.wrapper.innerHTML = "";
        this.wrapper.appendChild(new ImageView(this.getAttribute("src")));
        this.wrapper.appendChild(new CaptionView(this.getAttribute("caption")));
    }

    connectedCallback() {
        super.connectedCallback();        
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    adoptedCallback() {
        super.adoptedCallback();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}

customElements.define('card-view', CardView);