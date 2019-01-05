import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertService} from './services/alert.service';
import {AlertComponent} from './components/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent
  ],
  providers: [
    AlertService
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule {
}
