/* globals App */

// create an instance of the App component
const app = new App();
// get the dom via Render function
const dom = app.render();
// select root element
const root = document.getElementById('root');
// put App dom elements into root
root.appendChild(dom);