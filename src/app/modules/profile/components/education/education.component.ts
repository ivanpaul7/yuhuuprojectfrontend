import {Component, Input, OnInit} from '@angular/core';
import {Education} from '../../../../shared/model/Education';
import {AbstractStudentProfileService} from '../../services/student-profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  constructor(private studentProfileService: AbstractStudentProfileService) {
  }

  ngOnInit() {

  }

  public;

}
