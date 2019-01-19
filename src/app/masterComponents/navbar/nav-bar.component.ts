import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {applicantNavBarItems, companyNavBarItems, NavBarItem} from '../../app.module';
import {SessionManagementService} from '../../shared/utils/session-management.service';
import {Role} from '../../shared/model/Role';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  constructor(private sessionManagementService: SessionManagementService, private router: Router) {
    this.environment = environment;
    this.isLoginDataLoadingFinishedSubscription = this.sessionManagementService.isLoginDataLoadingFinished.subscribe((response) => {
      if (response) {
        if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.APPLICANT) {
          this.menuNavBar = applicantNavBarItems;
        } else if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.COMPANY) {
          this.menuNavBar = companyNavBarItems;
        }
      }
    });
    if (!this.sessionManagementService.isUserLoggedIn()) {
      this.sessionManagementService.retrieveFromLocalStorage();
    }
  }

  public environment: any;
  public menuNavBar: NavBarItem[];
  isLoginDataLoadingFinishedSubscription: Subscription;

  @ViewChild('myTopnav') myTopnav: ElementRef;

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.isLoginDataLoadingFinishedSubscription.unsubscribe();
  }

  public logout() {
    this.sessionManagementService.clearLocalStorage();
    this.router.navigate(['/login']);
  }

  public myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

}
