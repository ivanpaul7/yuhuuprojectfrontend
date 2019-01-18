import {Component, OnInit} from '@angular/core';
import {Internship, JoinCompany, JoinSkill} from '../../../../shared/model/InternshipEnums';
import {AbstractInternshipsService} from '../../services/internships.service';
import {Company, Skill} from 'src/app/shared/model/models';
import {StudentProfileEditBasicComponent} from '../../../profile/components/student-profile-edit-basic/student-profile-edit-basic.component';
import {AddInternshipComponent} from '../add-internship/add-internship.component';
import {MatDialog} from '@angular/material';
import {InternshipDTO} from '../../../../shared/model/InternshipDTO';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {
  internships: Internship[] = [];
  // companiesJoin: JoinCompany[] = [];
  skillsJoin: JoinSkill[] = [];
  isHisProfile = true;

  internshipDTOs : InternshipDTO[];

  constructor(private internshipsService: AbstractInternshipsService, public dialog: MatDialog) {
    this.internshipsService.getAllInternshipDTOs().subscribe(data => {
      this.internshipDTOs=data;
    });

    // this.internshipsService.getInternships().subscribe(
    //   (data: Internship[]) => {
    //     this.internships = data;
    //     for (const internship of data) {
    //       this.internshipsService.getInternshipCompany(internship.id).subscribe(
    //         (company: Company) => this.companiesJoin.push({
    //           idInternship: internship.id,
    //           idCompany: company.id
    //         }),
    //         error => console.log(error)
    //       );
    //       this.internshipsService.getInternshipSkills(internship.id).subscribe(
    //         (skill: Skill[]) => this.skillsJoin.push({
    //           idInternship: internship.id,
    //           skills: skill
    //         }),
    //         error => console.log(error)
    //       );
    //     }
    //   },
    //   error => console.log(error)
    // );
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
    this.internshipsService.getAllInternshipDTOs().subscribe(
      (data: InternshipDTO[]) => {
        this.internshipDTOs = data;
      });
    if (companyFilters.length !== 0) {
      this.internshipDTOs = this.internshipDTOs.filter((internship) => {
        // const company = this.companiesJoin.find((join) => join.idInternship === internship.id);

        return companyFilters.map((comp) => comp.id).indexOf(internship.company.id) > -1;
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

  openAddInternshipDialog() {
    const dialogRef = this.dialog.open(AddInternshipComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      //todo refresh list
    });
  }
}
