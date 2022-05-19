import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Security } from 'src/app/_models/security';
import { AuthService } from 'src/app/_services/auth.service';
import { SecurityService } from 'src/app/_services/security.service';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.page.html',
  styleUrls: ['./security-details.page.scss'],
})
export class SecurityDetailsPage implements OnInit {

  security: Security;

  constructor(
    private activatedRoute: ActivatedRoute,
    private securityService: SecurityService,
    public auth: AuthService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        return;
      }
      const securityId = paramMap.get('id');
      this.security = this.securityService.getSecurity(securityId);
    });
  }

}
