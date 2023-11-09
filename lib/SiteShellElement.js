const template = `
  <style>
    nav {
      padding: var(--site-padding, 1rem);
      background: black;
      color: white;
      display: none; /* I know I'll change my mind soon */
    }
    nav a {
      color: white;
    }
    nav a:hover {
      text-decoration: none;
    }
    footer {
      padding: var(--site-padding, 1rem);
      text-transform: uppercase;
      font-size: .75rem;
    }
    footer span {
      opacity: .6;
    }
  </style>
  
  <nav>
    <a href="/index.html">Home</a>
  </nav>

  <slot name="main"></slot>
  
  <footer>
  💖 <span>Made for fun in Cambridge.</span>
  </footer>
`

class SiteShellElement extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = template
  }
  connectedCallback() {
    // To Do find active link and make bold
  }
}

window.customElements.define('site-shell', SiteShellElement)
