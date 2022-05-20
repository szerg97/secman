import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Security } from 'src/app/_models/security';
import { Transaction } from 'src/app/_models/transaction';
import { AuthService } from 'src/app/_services/auth.service';
import { SecurityService } from 'src/app/_services/security.service';
import { TransactionService } from 'src/app/_services/transaction.service';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.page.html',
  styleUrls: ['./security-details.page.scss'],
})
export class SecurityDetailsPage implements OnInit {
  @ViewChild('faceValueCtrl') face;
  security: Security;
  faceVal: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private securityService: SecurityService,
    private transactionService: TransactionService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public auth: AuthService
    ) {
      this.faceVal = 0;
     }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        return;
      }
      const securityId = paramMap.get('id');
      this.security = this.securityService.getSecurity(securityId);
    });
  }

  onChange(){
    this.faceVal = this.face.value;
  }

  onPurchase(form: NgForm){
    if (!form.valid){
      return;
    }

    this.loadingCtrl.create({
      message: 'Transaction in progress...'
    })
    .then(loadingEl => {
      loadingEl.present();
      const faceValue = form.value.faceValue;
      const realValue = form.value.realValue;

      const model = {id: '4', faceValue, realValue, security: this.security};
      console.log(model);

      this.transactionService
        .addTransaction(
          model
        );
          loadingEl.dismiss();
          form.reset();
          this.navCtrl.navigateBack('/securities/discover');
        });
    }

}
