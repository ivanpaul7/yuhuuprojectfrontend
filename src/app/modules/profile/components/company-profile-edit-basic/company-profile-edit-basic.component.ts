import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Company} from '../../../../shared/model/Company';
import {AbstractCompanyProfileService} from '../../services/company-profile.service';

@Component({
  selector: 'app-company-profile-edit-basic',
  templateUrl: './company-profile-edit-basic.component.html',
  styleUrls: ['./company-profile-edit-basic.component.scss']
})
export class CompanyProfileEditBasicComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  company: Company;

  constructor(
    private companyService: AbstractCompanyProfileService,
    public dialogRef: MatDialogRef<CompanyProfileEditBasicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.company = JSON.parse(JSON.stringify(data.companyProfile));
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveClick() {
    this.companyService.updateCompanyBasicInfo(this.company)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }
}
