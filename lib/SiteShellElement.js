const template = `
  <style>
    nav {
      padding: .5rem;
      text-align: center;
    }
    footer {
      text-align: center;
      padding: .5rem;
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
