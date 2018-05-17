/* globals ViewerApp */

const app = new ViewerApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);