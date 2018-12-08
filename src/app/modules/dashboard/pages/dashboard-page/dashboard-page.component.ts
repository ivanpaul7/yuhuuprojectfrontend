import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import * as RoutingController from '../../dashboard.routing';
import {NavbarItem} from '../../dashboard.routing';

declare var $;

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent implements OnInit {

  public environment: any;
  public menuNavBar: NavbarItem[];

  constructor() {
    this.environment = environment;
    this.menuNavBar = RoutingController.navbarItems;
  }

  ngOnInit() {
  }
}
