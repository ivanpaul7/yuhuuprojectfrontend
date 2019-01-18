import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Company, Skill } from 'src/app/shared/model/models';
import { AbstractInternshipsService } from '../../services/internships.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterForm: FormGroup;
  removable = true;
  companies: Company[] = [];
  skills: Skill[] = [];
  selectedCompanies: Company[] = [];
  selectedSkills: Skill[] = [];
  @ViewChild('triggerCompany', { read: MatAutocompleteTrigger }) triggerCompany: MatAutocompleteTrigger;
  @ViewChild('triggerSkill', { read: MatAutocompleteTrigger }) triggerSkill: MatAutocompleteTrigger;
  timeout;

  constructor(private internshipsService: AbstractInternshipsService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.internshipsService.getCompanies().subscribe(
      (data: Company[]) => this.companies = data,
      error => console.log(error)
    );
    this.internshipsService.getSkills().subscribe(
      (data: Skill[]) => this.skills = data,
      error => console.log(error)
    );
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          if (params['skill'] !== undefined) {
            this.selectedSkills = this.selectedSkills.concat(decodeURI(params['skill'])
              .split(',').map((name: string) => this.skills.find((skill) => skill.name === name)));
          }
          if (params['company'] !== undefined) {
            this.selectedCompanies = this.selectedCompanies.concat(decodeURI(params['company'])
              .split(',').map((name: string) => this.companies.find((company) => company.name === name)));
          }
          this.setFilters();
          this.router.navigate(['internships']);
        }
      );
    this.filterForm = new FormGroup({
      'companyFilter': new FormControl(''),
      'skillFilter': new FormControl('')
    });
  }

  public get filteredCompanies() {
    const value = this.filterForm.get('companyFilter').value;
    if (value !== null && value !== undefined && value !== '') {
      return this.companies.filter(company => this.selectedCompanies.indexOf(company) < 0)
        .filter((company) => company.name.toLowerCase().includes(value.toLowerCase()));
    }
    return this.companies.filter(company => this.selectedCompanies.indexOf(company) < 0);
  }

  public get filteredSkills() {
    const value = this.filterForm.get('skillFilter').value;
    if (value !== null && value !== undefined && value !== '') {
      return this.skills.filter(skill => this.selectedSkills.indexOf(skill) < 0)
        .filter((skill) => skill.name.toLowerCase().includes(value.toLowerCase()));
    }
    return this.skills.filter(skill => this.selectedSkills.indexOf(skill) < 0);
  }

  removeCompany(value: Company): void {
    const index = this.selectedCompanies.indexOf(value);
    if (index >= 0) {
      this.selectedCompanies.splice(index, 1);
    }
    this.setFilters();
  }

  removeSkill(value: Skill): void {
    const index = this.selectedSkills.indexOf(value);
    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
    }
    this.setFilters();
  }

  selectedCompany(event: MatAutocompleteSelectedEvent): void {
    this.selectedCompanies.push(event.option.value);
    const self = this;
    clearInterval(this.timeout);
    this.timeout = setTimeout(function () {
      self.triggerCompany.openPanel();
    }, 0);
    this.filterForm.get('companyFilter').setValue(null);
    this.setFilters();
  }

  selectedSkill(event: MatAutocompleteSelectedEvent): void {
    this.selectedSkills.push(event.option.value);
    const self = this;
    clearInterval(this.timeout);
    this.timeout = setTimeout(function () {
      self.triggerSkill.openPanel();
    }, 0);
    this.filterForm.get('skillFilter').setValue(null);
    this.setFilters();
  }

  private setFilters() {
    this.internshipsService.setCompanyFilters(this.selectedCompanies);
    this.internshipsService.setSkillFilters(this.selectedSkills);
  }

}
