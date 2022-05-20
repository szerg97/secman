import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Security } from 'src/app/_models/security';
import { Transaction } from 'src/app/_models/transaction';
import { TransactionService } from 'src/app/_services/transaction.service';

@Component({
  selector: 'app-purchased-details',
  templateUrl: './purchased-details.page.html',
  styleUrls: ['./purchased-details.page.scss'],
})
export class PurchasedDetailsPage implements OnInit {

  transaction: Transaction;

  constructor(
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute
    ) {
    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        return;
      }
      const id = paramMap.get('id');
      this.getTransaction(id);
    });
  }

  getTransaction(id: string){
    this.transaction = this.transactionService.getTransaction(id);
  }

}
