'use strict';
/* globals productOption clearReportData */
/*exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor(){
        this.productOption = this.productOption;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearReportData();
            window.location.reload();
        });
    }
}
