import {Component, OnInit} from '@angular/core';
import {CompanyChartService} from '../../services/company-chart.service';
import {Internship} from '../../../../shared/model/InternshipEnums';
import {Applicant} from '../../../../shared/model/applicant';

@Component({
  selector: 'app-company-chart',
  templateUrl: './company-chart.component.html',
  styleUrls: ['./company-chart.component.scss']
})
export class CompanyChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [], label: 'Number of applicants'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor(public companyChartService: CompanyChartService) {

  }

  ngOnInit() {
    this.companyChartService.getInternshipsForCompany().subscribe((internships: Internship[]) => {
      const datama = [];
      for (let i = 0; i < internships.length; i++) {
        this.companyChartService.getApplicantsForInternship(internships[i].id).subscribe((applicants: Applicant[]) => {
          datama.push(applicants.length);
          const clone = JSON.parse(JSON.stringify(this.barChartData));
          clone[0].data = datama;
          this.barChartData = clone;
        });
        this.barChartLabels.push(internships[i].title);

      }
    });
  }

}
