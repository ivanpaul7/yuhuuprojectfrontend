import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Company} from '../../../../shared/model/Company';
import {AbstractCompanyProfileService} from '../../services/company-profile.service';

@Component({
  selector: 'app-company-profile-edit-contact',
  templateUrl: './company-profile-edit-contact.component.html',
  styleUrls: ['./company-profile-edit-contact.component.scss']
})
export class CompanyProfileEditContactComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  company: Company;

  constructor(
    private companyService: AbstractCompanyProfileService,
    public dialogRef: MatDialogRef<CompanyProfileEditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.company = JSON.parse(JSON.stringify(data.companyProfile));
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveClick() {
    this.companyService.updateCompanyContact(this.company)
      .subscribe(() => {
        this.updateEmail();
      });
  }

  updateEmail() {
    this.companyService.updateCompanyEmail(this.company)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }
}

