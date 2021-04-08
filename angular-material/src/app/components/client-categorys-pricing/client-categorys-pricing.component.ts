import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';
import { ClientServiceService } from 'src/app/client_service/client-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}





const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-client-categorys-pricing',
  templateUrl: './client-categorys-pricing.component.html',
  styleUrls: ['./client-categorys-pricing.component.css']
})
export class ClientCategorysPricingComponent implements OnInit {
 
  constructor( private clientService: ClientServiceService) { }



  displayedColumns: string[] = ['c_complexity_category', 'c_description', 'c_market_price', 'c_ce_price'];
  dataSource ;

  ngOnInit(): void {
    // console.log(this.dataSource);
    this.getDetails();
  }

  getDetails(){
   
    this.clientService.getClientCategoryPricing().subscribe(res=>{
      // console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
      
    })
  }

}
