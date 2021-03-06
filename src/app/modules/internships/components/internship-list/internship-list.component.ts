import {Component, OnInit} from '@angular/core';
import {Internship, JoinCompany, JoinSkill} from '../../../../shared/model/InternshipEnums';
import {AbstractInternshipsService} from '../../services/internships.service';
import {Company, Skill} from 'src/app/shared/model/models';
import {StudentProfileEditBasicComponent} from '../../../profile/components/student-profile-edit-basic/student-profile-edit-basic.component';
import {AddInternshipComponent} from '../add-internship/add-internship.component';
import {MatDialog} from '@angular/material';
import {InternshipDTO} from '../../../../shared/model/InternshipDTO';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {
  internships: Internship[] = [];
  isHisProfile = true;
  skillFilters: string[] = [];
  companyFilters: Company[] = [];
  internshipDTOs : InternshipDTO[];

  constructor(private internshipsService: AbstractInternshipsService, public dialog: MatDialog) {
    this.internshipsService.getAllInternshipDTOs().subscribe(data => {
      this.internshipDTOs=data;
    });
  }

  ngOnInit() {
    this.internshipsService.companySubject.subscribe(
      (data: Company[]) => this.companyFilters=data,
      error => console.log(error)
    );
    this.internshipsService.skillSubject.subscribe(
      (data: string[]) => this.skillFilters=data,
      error => console.log(error)
    );
  }

   public get filteredInternships() {

    this.internshipsService.getAllInternshipDTOs().subscribe(
      (data: InternshipDTO[]) => {
        this.internshipDTOs = data;
      });
    if (this.companyFilters.length !== 0) {
      this.internshipDTOs = this.internshipDTOs.filter((internship) => {
        return this.companyFilters.map((comp) => comp.id).indexOf(internship.company.id) > -1;
      });
    }
    if (this.skillFilters.length !== 0) {
      this.internshipDTOs = this.internshipDTOs.filter((internship) => {
        const internshipSkills = internship.skills.map((skill) => skill.name);
        return this.skillFilters.filter(
          (skill) => internshipSkills.indexOf(skill) > -1)
          .length === this.internshipsService.skillFilters.length;
      });
    }
    return this.internshipDTOs;
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
