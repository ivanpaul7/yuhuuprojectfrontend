import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Company} from '../../../../shared/model/Company';
import {AbstractCompanyProfileService} from '../../services/company-profile.service';
import {MatDialog, MatListModule} from '@angular/material';

import {CompanyProfileEditBasicComponent} from '../../components/company-profile-edit-basic/company-profile-edit-basic.component';
import {CompanyProfileEditContactComponent} from '../../components/company-profile-edit-contact/company-profile-edit-contact.component';

@Component({
  selector: 'app-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.scss']
})
export class CompanyProfilePageComponent implements OnInit {
  @Input() company: Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: AbstractCompanyProfileService,
    private location: Location,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getCompany();
  }

  public getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(profile => {
        this.company = profile;
      });
  }

  openBasicEditDialog() {
    const dialogRef = this.dialog.open(CompanyProfileEditBasicComponent, {
      width: '90%',
      data: {companyProfile: this.company}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getCompany();
    });
  }

  openContactEditDialog() {
    const dialogRef = this.dialog.open(CompanyProfileEditContactComponent, {
      width: '90%',
      data: {companyProfile: this.company}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getCompany();
    });
  }

}
