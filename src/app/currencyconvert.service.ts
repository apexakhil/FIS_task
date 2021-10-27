import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyconvertService {

  apiurl="http://localhost:8080/currencyconvertor";
  
  constructor(private http: HttpClient) { }

  converttoINR(USDtoINR){
    return this.http.get(this.apiurl+'/USDtoINR?USD='+USDtoINR,{'responseType':'text'})
  }

  converttoUSD(INRtoUSD){
    return this.http.get(this.apiurl+'/INRtoUSD?INR='+INRtoUSD,{'responseType':'text'})
  }

  converttoINRinPost(USDtoINRinPost: number){
    return this.http.post(this.apiurl+'/USDtoINRinPost',{input: USDtoINRinPost},{'responseType':'text'})
  }

  converttoUSDinPost(INRtoUSDinPost: number){
    return this.http.post(this.apiurl+'/INRtoUSDinPost',{input: INRtoUSDinPost},{'responseType':'text'})
  }
}
