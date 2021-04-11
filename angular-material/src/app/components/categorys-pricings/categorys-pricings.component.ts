import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';
import { ClientServiceService } from 'src/app/client_service/client-service.service';

@Component({
  selector: 'app-categorys-pricings',
  templateUrl: './categorys-pricings.component.html',
  styleUrls: ['./categorys-pricings.component.css']
})
export class CategorysPricingsComponent implements OnInit {
  public fbFormGroup = this.fb.group({
    c_complexity_category:['', Validators.required],
    c_description:['', Validators.required],
    c_market_price:['', Validators.required],
    c_ce_price:['', Validators.required]
  });


  constructor( private clientService: ClientServiceService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDetails();
  }
  dataSource:ClientCategoryPricing[] = [];
  inputForm:boolean = false;
  addBtn:boolean = true;
  categoryPricing:ClientCategoryPricing = new ClientCategoryPricing();
  getDetails(){
   
    this.clientService.getClientCategoryPricing().subscribe(res=>{
      // console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
      
    })
  }

  addDetials(){
    this.inputForm = true;
    this.addBtn = false;
  }
  saveDetials(){
    const data = this.fbFormGroup.value;
    console.log(data);
    console.log(this.fbFormGroup.valid);
    
    this.clientService.createClient(data).subscribe(res=>{
      console.log("done "+ res);
      alert("Added Successfully !!")
      this.getDetails();
      this.inputForm = false;
    })
  }
  cencledetials(){
    this.inputForm = false;
    this.addBtn = true;
  }
}
