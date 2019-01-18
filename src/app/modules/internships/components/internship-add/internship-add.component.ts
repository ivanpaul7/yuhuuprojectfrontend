import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-internship-add',
    templateUrl: './internship-add.component.html',
})
export class InternshipAddComponent {

    constructor(
        public dialogRef: MatDialogRef<InternshipAddComponent>,
        @Inject(MAT_DIALOG_DATA) public data) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}