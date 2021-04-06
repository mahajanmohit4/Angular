import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PrintMethodService } from '../services/print-method.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addbBtn') addBtn:ElementRef;
  constructor(private printService:PrintMethodService) { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
      
  }
 count:number =0;
  onSave(){
    // let count =0;
    console.log("btn working "); 
    let val = ++this.count;
    
    this.printService.print1(val);
  }


}
