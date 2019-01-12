import {Component, OnInit} from '@angular/core';
import {Internship} from '../../../../shared/model/internships.model';
import {InternshipsService} from '../../services/internships.service';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {
  internships: Internship[];

  constructor(private internshipsService: InternshipsService) {
  }

  ngOnInit() {

  }

  public get filteredInternships() {
    this.internships = this.internshipsService.getInternships();
    if (this.internshipsService.companyFilters.length !== 0) {
      this.internships = this.internships.filter(
        (internship) => this.internshipsService.companyFilters.indexOf(internship.company) > -1);
    }
    if (this.internshipsService.skillFilters.length !== 0) {
      this.internships = this.internships.filter((internship) => internship.skills !== undefined && internship.skills.filter(
        (skill) => this.internshipsService.skillFilters.indexOf(skill) > -1)
        .length === this.internshipsService.skillFilters.length);
    }
    return this.internships;
  }

}
