import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Security } from 'src/app/_models/security';
import { SecurityService } from 'src/app/_services/security.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  searchTerm: string;

  loadedSecurities: Security[];
  isLoading = false;
  private securitiesSub: Subscription;

  constructor(
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private securityService: SecurityService
  ) { }

  ngOnInit() {
    this.securitiesSub = this.securityService.securities.subscribe(securities => {
      this.loadedSecurities = securities;
      this.menuCtrl.enable(true);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.securityService.securities.subscribe(() => {
      this.isLoading = false;
    });
  }

  onDeleteSecurity(id: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadingCtrl.create({ message: 'Deleting...' }).then(loadingEl => {
      loadingEl.present();
      this.securityService.deleteSecurity(id, this.loadedSecurities);
      loadingEl.dismiss();
    });
  }

  ngOnDestroy() {
    if (this.securitiesSub) {
      this.securitiesSub.unsubscribe();
    }
  }

}
