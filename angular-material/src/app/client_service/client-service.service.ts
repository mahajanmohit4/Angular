import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientCategoryPricing } from '../class/client-category-pricing';
import { TeamMember } from '../class/team-member';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private c_category_princing_url = "http://localhost:3000/c_categorys_pricings";

  constructor(private httpClient: HttpClient) { }
  
  getClientCategoryPricing(): Observable<ClientCategoryPricing[]>{
    return this.httpClient.get<ClientCategoryPricing[]>(`${this.c_category_princing_url}`);
  }
  addClientCategoryPricing(clientData:ClientCategoryPricing): Observable<object>{
    return this.httpClient.post(`${this.c_category_princing_url}`,ClientCategoryPricing);
  }

  createClient(client){
    return this.httpClient.post("http://localhost:3000/c_categorys_pricings",client);
  }
  deleteCategoryPricing(id:number){
    return this.httpClient.delete(`${this.c_category_princing_url}/${id}`);
  }
  modifyCategoryPricing(id:number, clientData:ClientCategoryPricing){
    return this.httpClient.put(`${this.c_category_princing_url}/${id}`,clientData);
  }
  getCategoryPricingById(id:number){
    return this.httpClient.get<ClientCategoryPricing>(`${this.c_category_princing_url}/${id}`);
  }

  team_member_url = 'http://localhost:3000/c_team_members';
  createTeamMember(team){
    return this.httpClient.post(`${this.team_member_url}`,team);
  }


}
