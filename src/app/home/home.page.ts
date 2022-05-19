import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginAsAdmin(){
    this.auth.isAdmin = true;
    this.router.navigateByUrl('/securities/discover');
  }

  loginAsCustomer(){
    this.auth.isAdmin = false;
    this.router.navigateByUrl('/securities/discover');
  }

}
