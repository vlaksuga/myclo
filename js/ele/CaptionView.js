import { BaseElement } from "./BaseElement.js";
export class CaptionView extends BaseElement {

    brand; title; price;

    constructor() {
        super();

        this.setEvent("click", () => alert("click Event"));

        this.setStyle(
            `
            .wrapper {
                display: flex;
                flex-direction: column;
            }
            .brand {
                font-weight: bold;
            }
            .title {
                font-size: 12px;
            }
            .price {
                font-size: 12px;
            }
            `
        )

        this.brand = this.span();
        this.title = this.span();
        this.price = this.span();

        this.brand.classList.add("brand");
        this.title.classList.add("title");
        this.price.classList.add("price");

        this.wrapper.appendChild(this.brand);
        this.wrapper.appendChild(this.title);
        this.wrapper.appendChild(this.price); 
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
        console.log("xx");
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}

customElements.define('caption-view', CaptionView);