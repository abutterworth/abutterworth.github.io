class SiteFooterElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `
      <footer>
        Made with love.
      </footer>
    `;
  }
  connectedCallback() {
    console.log('connected!');
  }
}

window.customElements.define("site-footer", SiteFooterElement);
