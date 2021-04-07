import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Subscription, timer } from 'rxjs';
import { filter, map, pluck, take, takeUntil, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.mapOperator();
    // this.mapOperatorEx2();
    // this.mapOperatorEc3();
    // this.pluckEx1();
    // this.filterOperatorEx();
    // this.tapOperatorEx1();
    // this.takeOperator();
    this.takeUntilOperator();
  }
  sub1:Subscription
  mapOperator(){
    const broadCastVideo = interval(1000);
    this.sub1 = broadCastVideo.pipe(
      map(data => "Hello "+data)
    ).subscribe(res=>{
      console.log(res);
      
    })
    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);
  }
  mapOperatorEx2()
  {
    const table = interval(1000);
    this.sub1 = table.pipe(
      map(data => data+data)
    ).subscribe(res=>{
      console.log(res);
      
    })
    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);
  }

  mapOperatorEc3(){
      const arr =[
        {id:1, name:"Hello"},
        {id:2, name:"Mohit"},
        {id:3, name:"Deepak"},
        {id:4, name:"Vikram"},
        {id:5, name:"Rajesh"},
        {id:6, name:"Jayesh"},
      ];

      const member = from(arr);
      this.sub1 = member.pipe(
        map(data => data.name)
      ).subscribe(res=>{
        console.log(res);        
      })
  }
  userData
  pluckEx1(){
    const arr =[
      {id:1, name:"Hello"},
      {id:2, name:"Mohit"},
      {id:3, name:"Deepak"},
      {id:4, name:"Vikram"},
      {id:5, name:"Rajesh"},
      {id:6, name:"Jayesh"},
    ];
    from(arr).pipe(
     // map(data=>data), 
     pluck('name'),
      toArray()
    ).subscribe(res=>{
      this.userData=res;
      console.log(res);      
    })
  }

  filterOperatorEx(){
    const arr =[
      {id:1, name:"Hello"},
      {id:2, name:"Mohit"},
      {id:3, name:"Deepak"},
      {id:4, name:"Vikram"},
      {id:5, name:"Rajesh"},
      {id:6, name:"Jayesh"},
    ];

    from(arr).pipe(
      // filter(data=> data.name.length >5), 
      filter(data=> data.id >5),
      toArray()
    ).subscribe(res=>{
      console.log(res);
      this.userData = res;
    })
  }
  
  tapOperatorEx1(){
    const arr = ["MOHIT", "deepak", "harsh", "abhishek", "ritesh"];
    const source = interval(1000);
    this.sub1 = source.pipe(
      tap(data=>{
        if(data == 4){         
          this.sub1.unsubscribe()
        }
      }),
      map(data=>arr[data])
    )
    .subscribe(res=>{
      console.log(res);
      
    })
     
  }

  takeOperator(){
    const obj = interval(1000);
    obj.pipe(
      take(4)
    ).subscribe(res=>{console.log(res);
    })
  }

  takeUntilOperator(){
    const obj = interval(1000);
    let condition1 = timer(7000);
    let condition2 = fromEvent(document,'click');
    obj.pipe(
      takeUntil(condition2)
    ).subscribe(res=>{
      console.log(res);
      
    })
  }
  
}
