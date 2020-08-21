import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public route : String;
  public app_name = "Escuelita Barrera";

  constructor(router:Router) {
    router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart) {
        this.route = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

}
