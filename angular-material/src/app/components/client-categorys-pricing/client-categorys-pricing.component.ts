import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';
import { ClientServiceService } from 'src/app/client_service/client-service.service';
import { AddClientCategorysPricingComponent } from '../add-client-categorys-pricing/add-client-categorys-pricing.component';







@Component({
  selector: 'app-client-categorys-pricing',
  templateUrl: './client-categorys-pricing.component.html',
  styleUrls: ['./client-categorys-pricing.component.css']
})
export class ClientCategorysPricingComponent implements OnInit {
 
  constructor( 
    private clientService: ClientServiceService,
    private dialog: MatDialog) { }



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

  addDetails(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(AddClientCategorysPricingComponent,dialogConfig);
   
  }

}
