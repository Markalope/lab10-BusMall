'use strict';

/* exported ViewingReport ViewsVotesReport productOption */

const viewingReportTemplate = document.getElementById('report-container-template').content;

class ViewingReport {
    constructor(productOption) {
        this.productOption = productOption;
    }

    update(productOption) {
        this.productOption = productOption;

        while(this.tableBody.lastElementChild) {
            this.tableBody.lastElementChild.remove();
        }
        for(let i = 0; i < this.productOption.length; i++) {
            const reportComponent = new ViewsAndVotesReport(this.productOption[i]);
            this.tableBody.appendChild(reportComponent.render());
        }

    }

    render() {
        const dom = viewingReportTemplate;
        const header = dom.querySelector('h2');
        const table = dom.querySelector('table');

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.productOption.length; i++){
            const reportComponent = new ViewsAndVotesReport(this.productOption[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
        return dom;
    }

}

/* my original for loop for reporting

for(let i = 0; i <= productOption.length; i++){
    var reportContent = '<p><strong> ' + productOption[i].name + '</strong> has been viewed ' + productOption[i].viewed + ' times, and received<strong> ' + productOption[i].votes + '</strong> votes.<br>';
    document.getElementById('report-container').innerHTML += (reportContent);
}
document.getElementById('report-container').innerHTML += (reportContent);
*/
