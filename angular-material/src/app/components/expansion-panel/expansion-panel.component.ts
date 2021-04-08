
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClientServiceService } from 'src/app/client_service/client-service.service';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';


@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
})
export class ExpansionPanelComponent implements OnInit {
  
  ngOnInit(): void {}

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });
  
  public formBuilderGroup = this.fromBuilder.group({
    c_complexity_category:[''],
    c_description:[''],
    c_market_price:[''],
    c_ce_price:['']
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private fromBuilder: FormBuilder,
    private clientService: ClientServiceService
  ) {  
  }


  c_complexity_category = new FormControl('', [Validators.required]);
  c_description = new FormControl('', [Validators.required]);
  c_market_price = new FormControl('', [Validators.required]);
  c_ce_price = new FormControl('', [Validators.required]);

   registerHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    
  }
  clientdata:ClientCategoryPricing;
  submit(){
    const data = this.formBuilderGroup.value;
    // console.log(data);
    this.clientdata = data;
    console.log(this.clientdata);
    
    // this.clientService.addClientCategoryPricing(data).subscribe(res=>{
    //   console.log(data);
      
    // })
    this.clientService.createClient(data).subscribe(res=>{
      console.log("aala re "+ res);
      
    })
  }
}
