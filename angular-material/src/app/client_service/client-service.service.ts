import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientCategoryPricing } from '../class/client-category-pricing';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private c_category_princing_url = "http://localhost:3000/c_categorys_pricings";

  constructor(private httpClient: HttpClient) { }
  
  getClientCategoryPricing(): Observable<ClientCategoryPricing[]>{
    return this.httpClient.get<ClientCategoryPricing[]>(`${this.c_category_princing_url}`);
  }
}
