import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.page.html',
  styleUrls: ['./securities.page.scss'],
})
export class SecuritiesPage implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
