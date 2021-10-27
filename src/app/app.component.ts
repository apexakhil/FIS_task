import { Component } from '@angular/core';
import { CurrencyconvertService } from './currencyconvert.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Currency Converter App';

  constructor(private currencyconverter: CurrencyconvertService){}

  public num1:number;
  public res:JSON;

  converttoUSD()
  {
    this.currencyconverter.converttoUSD(this.num1).subscribe((response:any)=>{
      this.res=response
    })
  }

  converttoINR()
  {
    this.currencyconverter.converttoINR(this.num1).subscribe((response:any)=>{
      this.res=response
    })
  }

  converttoUSDinPost()
  {
    this.currencyconverter.converttoUSDinPost(this.num1).subscribe((response:any)=>{
      this.res=response
    })
  }

  converttoINRinPost()
  {
    this.currencyconverter.converttoINRinPost(this.num1).subscribe((response:any)=>{
      this.res=response
    })
  }

  onlyNumbersAllowed(event):boolean
  {
    const charcode = (event.which)?event.which: event.keyCode;

    if(charcode>31 && (charcode<48 || charcode>57))
    {
      console.log('charcode restricted is '+charcode);
      return false;
    }

    return true;
  }

  
}
