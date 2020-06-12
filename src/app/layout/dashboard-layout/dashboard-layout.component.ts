import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})

export class DashboardLayoutComponent implements OnInit {

  constructor(private router: Router) { }
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link:  '/'
    },
    {
      title: 'Profile',
      link: '/profile'
    }
  ];

  ngOnInit() {
  }

}
