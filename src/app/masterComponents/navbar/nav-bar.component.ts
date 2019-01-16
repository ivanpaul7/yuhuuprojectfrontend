import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {applicantNavBarItems, companyNavBarItems, NavBarItem} from '../../app.module';
import {SessionManagementService} from '../../shared/utils/session-management.service';
import {Role} from '../../shared/model/Role';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public environment: any;
  public menuNavBar: NavBarItem[];

  constructor(private sessionManagementService: SessionManagementService) {
    this.environment = environment;
    this.sessionManagementService.isLoginDataLoadingFinished.subscribe((response) => {
      if (response) {
        if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.APPLICANT) {
          this.menuNavBar = applicantNavBarItems;
        } else if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.COMPANY) {
          this.menuNavBar = companyNavBarItems;
        }
      }
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.sessionManagementService.isLoginDataLoadingFinished.unsubscribe();
  }

}
