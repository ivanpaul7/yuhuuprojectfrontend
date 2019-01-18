import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  @ViewChild('spinner') progressSpinner: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  public stopSpinner() {
    const spinnerAsDomElement = this.progressSpinner.nativeElement as HTMLElement;
    spinnerAsDomElement.classList.add('hiddenSpinner');
  }

  public startSpinner() {
    const spinnerAsDomElement = this.progressSpinner.nativeElement as HTMLElement;
    spinnerAsDomElement.classList.remove('hiddenSpinner');
  }

}
