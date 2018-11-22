import { Component, OnInit } from '@angular/core';
import { Internship } from '../../services/internships.model';
import { InternshipsService } from '../../services/internships.service';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {
  internships: Internship[];

  constructor(private internshipsService: InternshipsService) { }

  ngOnInit() {
    this.internships = this.internshipsService.getInternships();
  }

}