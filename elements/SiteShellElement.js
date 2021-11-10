const template = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      align-items: center;
    }

    nav, #main-container, footer {
      padding: 1rem;
      width: 100%;
      max-width: 72rem;
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
    <a href="/index.html">Index</a>
  </nav>

  <div id="main-container">
    <slot name="main"></slot>
  </div>
  
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
