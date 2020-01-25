import './elements/SiteShellElement.js';
import './elements/SiteNavigationElement.js';
import './elements/SiteFooterElement.js';

// Common styles
const bootstrapStylesheet = document.createElement('link');
bootstrapStylesheet.rel = 'stylesheet';
bootstrapStylesheet.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
document.head.appendChild(bootstrapStylesheet);
