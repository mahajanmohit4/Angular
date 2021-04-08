import { Component, OnInit } from '@angular/core';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';
import { ClientServiceService } from 'src/app/client_service/client-service.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  constructor( private clientService:ClientServiceService) { }

  client:ClientCategoryPricing = new ClientCategoryPricing();


  ngOnInit(): void {
    // this.client.c_ce_price="123"
    // this.client.id = "121"
    this.save()
  }

  save(){
    console.log(this.client);
    const hello =   {
      "c_complexity_category": "user22",
      "c_description": "user22",
      "c_market_price": "SADF",
      "c_ce_price": "ASDF",
      "id": 16
  }
    // this.clientService.addClientCategoryPricing(this.client).subscribe(res=>{
    //   console.log(res);
      
    // })

    this.clientService.createClient(this.client).subscribe(res=>{
      console.log("added "+res);
      
    })
  }

}
