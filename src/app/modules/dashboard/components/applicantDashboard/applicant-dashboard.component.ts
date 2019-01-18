import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Company} from '../../../../shared/model/Company';
import {DashboardService} from '../../utils/service/dashboard.service';
import {Applicant} from '../../../../shared/model/applicant';
import {Skill} from '../../../../shared/model/Skill';
import {InternshipDTO} from '../../../../shared/model/InternshipDTO';
import {Internship} from '../../../../shared/model/InternshipEnums';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicantDashboardComponent implements OnInit {

  public companies: Company[];
  public applicant: Applicant;
  public skillList: Skill[];
  public internshipList: Internship[];
  public skillsAsString: string = '';
  public allInternshipsDTO: InternshipDTO[];
  public allSkills: Skill[];
  public pieChartData;
  public chartData;

  constructor(private dashboardService: DashboardService) {

    this.dashboardService.initialize();

    this.dashboardService.getFirst3Companies().subscribe((companies) => {
      this.companies = companies;
    }, (error) => {
    });

    this.dashboardService.getApplicant().subscribe((applicant) => {
      this.applicant = applicant;
    }, (error) => {
    });
    this.dashboardService.getApplicantSkills().subscribe((skills) => {
      this.skillList = skills;
      this.skillList.forEach((skill: Skill) => {
        this.skillsAsString += ' #' + skill.name;
      });
      this.dashboardService.getInternshipBySkills(this.skillList).subscribe((internships) => {
        this.internshipList = internships;
      }, () => {
      });
    }, () => {
    });
    this.dashboardService.getAllSkills().subscribe((skills) => {
      this.allSkills = skills;
      this.dashboardService.getAllInternships().subscribe((internships) => {
        this.allInternshipsDTO = internships;
        this.pieChartData = this.getDataForPieChart(this.allSkills, this.allInternshipsDTO);
        this.chartData =this.getDataForChart(this.allInternshipsDTO);
      }, () => {
      });

    }, () => {
    });
  }


  ngOnInit() {

  }

  getDataForPieChart(skills: Skill[], internships: InternshipDTO[]) {
    let dataToReturn = [];
    skills.forEach((skill: Skill) => {
      if (skill.name !== 'Communicative' && skill.name !== 'Positive Attitude' && skill.name !== 'Flexibility' && skill.name !== 'Elm')
        dataToReturn.push([skill.name, 0]);
    });
    internships.forEach((internships: InternshipDTO) => {
      let skills = internships.skills;
      dataToReturn.forEach((item: [string, number]) => {
        skills.forEach((skill: Skill) => {
          if (item[0] == skill.name) {
            item[1]++;
          }
        });
      });
    });
    var index = 0;
    while (index < dataToReturn.length) {
      if (dataToReturn[index][1] == 0) {
        dataToReturn.splice(index, 1);
      }
      else {
        index++;
      }
    }
    return dataToReturn;
  }

  getDataForChart(internships: InternshipDTO[]) {
    let object = {};
    internships.forEach((internship: InternshipDTO) => {
      if (Object.keys(object).indexOf(internship.company.name) == -1) {
        object[internship.company.name] = 1;
      }
      else {
        object[internship.company.name]++;
      }
    });
    let nameCompanies =['x'];
    let internshipPerCompanies =['pv'];
    for(var property in object){
      nameCompanies.push(property);
      internshipPerCompanies.push(object[property]);
    }
    let result = [
      nameCompanies,
      internshipPerCompanies
    ];
    return result;
  }
}
