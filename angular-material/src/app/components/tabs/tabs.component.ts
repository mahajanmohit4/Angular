import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  firstTap() {
    console.log('tap works !!!');
    this.router.navigate(['/tabs/child']);
  }
  firstTap1() {
    console.log('tap works !!!');
    this.router.navigate(['/tabs']);
  }
}
