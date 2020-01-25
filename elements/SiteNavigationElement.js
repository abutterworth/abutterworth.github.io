class SiteNavigationElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `
      <nav>
        <a href="index.html">Home</a>
        <a href="react-example.html">React Example</a>
      </nav>
    `;
  }
  setActive(active) {
    const element = this.shadowRoot.querySelector(`[href="${active}"]`);
    if (element) {
      element.classList.add('active');
    }
  }
  connectedCallback() {
    const active = this.getAttribute('active');
    this.setActive(active);
  }
}

window.customElements.define("site-navigation", SiteNavigationElement);
