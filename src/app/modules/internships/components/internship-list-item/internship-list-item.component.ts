import { Component, Input, OnInit } from '@angular/core';
import { Internship } from '../../../../shared/model/Internship';
import { AbstractInternshipsService } from '../../services/internships.service';
import { Company, Tag } from 'src/app/shared/model/models';

@Component({
  selector: 'app-internship-list-item',
  templateUrl: './internship-list-item.component.html',
  styleUrls: ['./internship-list-item.component.scss']
})
export class InternshipListItemComponent implements OnInit {
  @Input() internship: Internship;
  logo: string;
  company: Company;
  tags: Tag[];

  constructor(private intershipsService: AbstractInternshipsService) { }

  ngOnInit() {
    if (this.internship) {
      this.intershipsService.getInternshipLogo(this.internship.id).subscribe(
        (data) => this.logo = data.url,
        error => console.log(error)
      );
      this.intershipsService.getInternshipCompany(this.internship.id).subscribe(
        (data: Company) => this.company = data,
        error => console.log(error)
      );
      this.intershipsService.getInternshipTags(this.internship.id).subscribe(
        (data: Tag[]) => this.tags = data,
        error => console.log(error)
      );
    }
  }
}
