const template = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      align-items: center;
    }

    nav, footer {
      padding: var(--site-padding, 1rem);
      width: 100%;
      max-width: var(--site-max-width, 72rem);
      box-sizing: border-box;
    }

    #main-container {
      flex-grow: 1;
    }

    footer {
      text-transform: uppercase;
      font-size: .75rem;
    }
    footer span {
      opacity: .6;
    }
  </style>
  
  <nav>
    <a href="/index.html">Still Having Fun</a>
  </nav>

  <slot name="main"></slot>
  
  <footer>
  💖 <span>Made for fun in Cambridge.</span>
  </footer>
`;

class SiteShellElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = template;
  }
  connectedCallback() {
    // To Do find active link and make bold
  }
}

window.customElements.define("site-shell", SiteShellElement);
