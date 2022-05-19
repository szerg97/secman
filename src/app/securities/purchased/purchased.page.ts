import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/_models/transaction';
import { SecurityService } from 'src/app/_services/security.service';
import { TransactionService } from 'src/app/_services/transaction.service';

@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.page.html',
  styleUrls: ['./purchased.page.scss'],
})
export class PurchasedPage implements OnInit, OnDestroy {

  searchTerm: string;

  loadedTransactions: Transaction[];
  isLoading = false;
  private transactionsSub: Subscription;

  constructor(
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionsSub = this.transactionService.transactions.subscribe(transactions => {
      this.loadedTransactions = transactions;
      this.menuCtrl.enable(true);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.transactionService.transactions.subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.transactionsSub) {
      this.transactionsSub.unsubscribe();
    }
  }

}
