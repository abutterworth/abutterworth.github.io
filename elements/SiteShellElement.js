import './SiteNavigationElement.js';
import './SiteFooterElement.js';

class SiteShellElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `
      <site-navigation></site-navigation>
        <slot name="main"></slot>
      <site-footer></site-footer>
    `;
  }
  connectedCallback() {
    const active = this.getAttribute('active');
    const navElement = this.shadowRoot.querySelector('site-navigation');
    if (navElement) {
      navElement.setActive(active);
    }
  }
}

window.customElements.define("site-shell", SiteShellElement);
