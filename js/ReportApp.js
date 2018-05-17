'use strict';
/* globals clearReportData ViewingReport ViewingChart  */
/* exported ReportApp productOption  */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor(){
        this.productOption = this.productOption;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        // const button = dom.querySelector('button');
        // button.addEventListener('click', () => {
        //     clearReportData();
        //     window.location.reload();
        // });

        const viewingReportSection = dom.getElementById('report-container');
        const viewingReportComponent = new ViewingReport(this.productOption);
        const viewingReportDom = viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        const viewingChartSection = dom.getElementById('chart-container');
        const viewingChartComponent = new ViewingChart(this.productOption);
        const viewingChartDom = viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);

        return dom;
    }
}