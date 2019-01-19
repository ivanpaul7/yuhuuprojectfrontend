import {Component, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material';
import {Company} from '../../../../shared/model/Company';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AbstractCompaniesService} from '../../services/companies.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterForm: FormGroup;
  removable = true;
  name: string[] = [];
  selectedNames: string[] = [];
  companies: Company[] = [];
  @ViewChild('triggerName', {read: MatAutocompleteTrigger}) triggerCompany: MatAutocompleteTrigger;
  timeout;

  constructor(private companiesService: AbstractCompaniesService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          if (params['name'] !== undefined) {
            this.selectedNames = this.selectedNames.concat(decodeURI(params['name']).split(','));
          }
          this.router.navigate(['companies']);
        }
      );
    this.filterForm = new FormGroup({
      'nameFilter': new FormControl(''),
    });

    this.companiesService.getCompanies()
      .subscribe(company => {
        this.companies = company;
        this.name = this.companiesService.getCompanyName();
      });
    this.name = this.companiesService.getCompanyName();
  }

  public get filteredNames() {
    const value = this.filterForm.get('nameFilter').value;
    if (value !== null && value !== undefined && value !== '') {
      const x = this.name.filter(name => this.selectedNames.indexOf(name) < 0);
      this.filterForm.controls['nameFilter'].setValue('');
      return x;
    }
    return this.name.filter(company => this.selectedNames.indexOf(company) < 0);
  }

  removeName(value: string): void {
    const index = this.selectedNames.indexOf(value);
    if (index >= 0) {
      this.selectedNames.splice(index, 1);
    }
    this.setFilters();
  }

  selectedCompany(event: MatAutocompleteSelectedEvent): void {
    this.selectedNames.push(event.option.viewValue);
    this.filterForm.get('nameFilter').setValue(null);
    this.setFilters();
  }

  private setFilters() {
    this.companiesService.setNameFilters(this.selectedNames);
  }

}
