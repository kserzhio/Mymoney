import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'kss-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit{
  @Input() currency: any;
  currencies:any = ['USD', 'EUR'];
  byu = [];
  updateCurrency = []
  ngOnInit() {
      for (let value in this.currency){
        this.byu.push(this.currency[value]['buy']);
      }
     this.updateCurrency = this.byu.slice(0, 2);
  }
}
