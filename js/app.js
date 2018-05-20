/* exported App */
/* globals productOption */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.productOption;
        this.totalViews = 0;
    }
    render() {
        const dom = appTemplate.content;

        const productDisplay = dom.getElementById('product-display');
    };

    productDisplay.appendChild(productComponent.render());

return dom;
}


