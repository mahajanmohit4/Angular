import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClientServiceService } from 'src/app/client_service/client-service.service';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';


@Component({
  selector: 'app-add-client-categorys-pricing',
  templateUrl: './add-client-categorys-pricing.component.html',
  styleUrls: ['./add-client-categorys-pricing.component.css']
})
export class AddClientCategorysPricingComponent implements OnInit {
  public uiInvalidCredential = false;
  constructor( private fromBuilder: FormBuilder,
    private clientService: ClientServiceService,
    private router: Router) { }

  public formBuilderGroup = this.fromBuilder.group({
    c_complexity_category:[''],
    c_description:[''],
    c_market_price:[''],
    c_ce_price:['']
  })
  c_complexity_category = new FormControl('', [Validators.required]);
  c_description = new FormControl('', [Validators.required]);
  c_market_price = new FormControl('', [Validators.required]);
  c_ce_price = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  submit(){
    const data = this.formBuilderGroup.value;
    
    this.clientService.createClient(data).subscribe(res=>{
      console.log("done "+ res);
      // this.router.navigate(['c_categorys_pricing']);
    })
  }
 
}
