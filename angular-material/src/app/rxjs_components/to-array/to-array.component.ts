import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { PrintMethodService } from '../services/print-method.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor(private printService: PrintMethodService) { }
  sourceSub: Subscription;
  ngOnInit(): void {
    // this.example2();
    this.exmaple3();
  }
  example1(){
    const source = interval(2000);
    this.sourceSub = source.subscribe(res =>{
      console.log(res);
      this.printService.print2("lst",res);

      if(res >=10){
        this.sourceSub.unsubscribe();
      }
    })
  }
  example2(){
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res=>{
      console.log(res);
      
    })
  }
user = [{name:"Mohit", id:"11"}, {name:"Deepak", id:"22"}]
  exmaple3(){
    const source2 = from(this.user);
    source2.pipe(toArray())
    .subscribe(res=>{
      console.log(res);
      
    })
  }
}
