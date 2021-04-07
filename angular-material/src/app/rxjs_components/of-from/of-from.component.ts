import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { PrintMethodService } from '../services/print-method.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private printService:PrintMethodService) { }

  ngOnInit(): void {
    const obs1 = of("mohit","deepak","harsh");
    obs1.subscribe(res=>{
      console.log(res);
      this.printService.print1(res);
    })

    const arr = ["Mohit", "Harsh", "Abhi", "Ritesh"]
    const obs2 = from(arr);
    obs2.subscribe(res=>{
      console.log(res);
      this.printService.print2("list",res);
    })
    
  }
  
}
