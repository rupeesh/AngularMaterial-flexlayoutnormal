import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = true;
  }

  onLogout() {
    localStorage.removeItem('UserData');
    this.router.navigate(['login']);

  }

}
