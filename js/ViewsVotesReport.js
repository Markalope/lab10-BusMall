'use strict';

const reportContainerTemplate = document.getElementById('report-container-template');

class ViewsVotesReport {
    constructor(productOption) {
        this.productOption = productOption;
    }

    render() {
        const dom = reportContainerTemplate.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.productOption.name;
        columns[1].textContent = this.productOption.viewed;
        columns[3].textContent = this.productOption.votes;
        return dom;
    }
}