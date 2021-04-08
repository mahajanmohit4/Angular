import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-operator2',
  templateUrl: './operator2.component.html',
  styleUrls: ['./operator2.component.css']
})


export class Operator2Component implements OnInit {

  constructor() { }
  fatching:boolean = false;

  ngOnInit(): void {
   
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource
  loadintBtn(){
    console.log(ELEMENT_DATA);
    
    from(ELEMENT_DATA).pipe(
      map(data=>data), toArray()
    ).subscribe(res=>{
      this.dataSource = res
      console.log(res);
      this.fatching = true
    },
    err=>{this.fatching = false})
  }
  btnFatch(){
    this.loadintBtn();
  }

}
