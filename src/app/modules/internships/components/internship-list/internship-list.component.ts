import { Component, OnInit } from '@angular/core';
import { Internship, JoinCompany, JoinSkill } from '../../../../shared/model/Internship';
import { AbstractInternshipsService } from '../../services/internships.service';
import { Company, Skill } from 'src/app/shared/model/models';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {
  internships: Internship[] = [];
  companiesJoin: JoinCompany[] = [];
  skillsJoin: JoinSkill[] = [];

  constructor(private internshipsService: AbstractInternshipsService) {
    this.internshipsService.getInternships().subscribe(
      (data: Internship[]) => {
        this.internships = data;
        for (const internship of data) {
          this.internshipsService.getInternshipCompany(internship.id).subscribe(
            (company: Company) => this.companiesJoin.push({
              idInternship: internship.id,
              idCompany: company.id
            }),
            error => console.log(error)
          );
          this.internshipsService.getInternshipSkills(internship.id).subscribe(
            (skill: Skill[]) => this.skillsJoin.push({
              idInternship: internship.id,
              skills: skill
            }),
            error => console.log(error)
          );
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.internshipsService.companySubject.subscribe(
      (data: Company[]) => this.filterByCompanies(data),
      error => console.log(error)
    );
    this.internshipsService.skillSubject.subscribe(
      (data: Skill[]) => this.filterBySkills(data),
      error => console.log(error)
    );
  }

  filterByCompanies(companyFilters: Company[]) {
    this.internshipsService.getInternships().subscribe(
      (data: Internship[]) => {
        this.internships = data;
      });
    if (companyFilters.length !== 0) {
      this.internships = this.internships.filter((internship) => {
        const company = this.companiesJoin.find((join) => join.idInternship === internship.id);
        console.log(company);
        console.log(companyFilters.map((comp) => comp.id).indexOf(company.idCompany) > -1);
        return companyFilters.map((comp) => comp.id).indexOf(company.idCompany) > -1;
      });
    }
  }


  filterBySkills(skillFilters: Skill[]) {
    if (skillFilters.length !== 0) {
      this.internships = this.internships.filter((internship) => {
        const skillsFiltered = this.skillsJoin.find((join) => join.idInternship === internship.id);
        return skillsFiltered.skills.filter(
          (skill) => skillFilters.map((sk) => sk.id).indexOf(skill.id) > -1)
          .length === this.internshipsService.skillFilters.length;
      });
    }
  }

}
