import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }
 status;
  ngOnInit(): void {
    status= "completed";
    // this.operatorEx()
    this.ObservableEx2();
  }
  observableEXample(){
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

  operatorEx(){
   // map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
      first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  }

  sub:Subscription
  ObservableEx2(){
    let count = 1;
    const cusObs2 = Observable.create(observer=>{
      setInterval(()=>{
        observer.next("data emit " + count)
        count++;
        if (count == 15) {
          observer.complete()
        }
      },1000)
    })

    this.sub =  cusObs2.subscribe(res=>{
    console.log(res);
      
    })

  }
  ngOnDestroy(){
     this.sub.unsubscribe()
  }
}
