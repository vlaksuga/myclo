import { BaseElement } from "./BaseElement.js";

export class ImageView extends BaseElement {

    constructor(src) {
        super();
        this.image = this.img();
        this.image.src = src ? src : "/res/img000.jpg";
        this.wrapper.appendChild(this.image);
    }

    static get observedAttributes() { return ["src"]; }

    render() {
        super.render();
    }

    connectedCallback() {
        super.connectedCallback();
        this.setStyle(
            `img {
                display: block;
                border-radius: 10px;
                width: 400px;
                height: 400px;
            }`
        )
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

customElements.define('image-view', ImageView);