'use strict';
/* exported ViewsAndVotesReport */



const reportContainerTemplate = document.getElementById('report-container-template');

class ViewsAndVotesReport {
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
// use this file to create the DOM objects - add a for loop to create the objects for each of the table rows.