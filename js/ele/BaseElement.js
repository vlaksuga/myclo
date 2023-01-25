

export class BaseElement extends HTMLElement {

    shadow; style; wrapper; props;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode : "open" });
        this.wrapper = this.div();
        this.wrapper.classList.add("wrapper");
        this.style = this.newEle("style");
        this.shadow.appendChild(this.style);
        this.shadow.appendChild(this.wrapper);
        this.render();
    }

    render() { console.log("render : " + this.constructor.name); }

    setStyle(styleString) { this.style.textContent = styleString; }

    setEvent(eventName, fn) { this.wrapper.addEventListener(eventName, fn);}

    connectedCallback() {}

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(this.constructor.name + " Attributed Changed : ", name, oldValue, newValue);
        this.render();
    }

    newEle(t) { return document.createElement(t); }
    div() { return this.newEle("div"); }
    span() { return this.newEle("span"); }
    img() { return this.newEle("img"); }
}