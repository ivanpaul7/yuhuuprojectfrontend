import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {IntershipStatusRequestStringEnum} from '../../../../shared/model/IntershipStatusRequest';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-request-message-sender',
  templateUrl: './request-message-sender.component.html',
  styleUrls: ['./request-message-sender.component.scss']
})
export class RequestMessageSenderComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  requestId: number;
  newStatus: IntershipStatusRequestStringEnum;
  title = '';
  message = '';

  constructor(private internshipService: AbstractInternshipDetailsService,
              public dialogRef: MatDialogRef<RequestMessageSenderComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.requestId = data.requestId;
    this.newStatus = data.newStatus;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  sendMail() {
    this.internshipService.changeRequestStatus(this.requestId, this.title, this.message, this.newStatus).subscribe();
    this.dialogRef.close();
  }

}
