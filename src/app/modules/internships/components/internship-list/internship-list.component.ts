import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Company, Role } from 'src/app/shared/model/models';
import { InternshipDTO } from '../../../../shared/model/InternshipDTO';
import { Internship } from '../../../../shared/model/InternshipEnums';
import { AbstractInternshipsService } from '../../services/internships.service';
import { AddInternshipComponent } from '../add-internship/add-internship.component';
import { SessionManagementService } from 'src/app/shared/utils/session-management.service';

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
  internshipDTOs: InternshipDTO[];
  constructor(private internshipsService: AbstractInternshipsService, public dialog: MatDialog,
    public sessionManagementService: SessionManagementService) {
    this.internshipsService.getAllInternshipDTOs().subscribe(data => {
      this.internshipDTOs = data;
    });
  }

  ngOnInit() {
    this.internshipsService.companySubject.subscribe(
      (data: Company[]) => this.companyFilters = data,
      error => console.log(error)
    );
    this.internshipsService.skillSubject.subscribe(
      (data: string[]) => this.skillFilters = data,
      error => console.log(error)
    );
  }

  public get filteredInternships() {
    this.internshipsService.getAllInternshipDTOs().subscribe(
      (data: InternshipDTO[]) => this.internshipDTOs = data,
      (error) => console.log(error)
    );
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
      this.internshipsService.fetchAllInternshipDTOs().subscribe(
        (data: InternshipDTO[]) => this.internshipDTOs = data,
        (error) => console.log(error)
      );
    });
  }
}
