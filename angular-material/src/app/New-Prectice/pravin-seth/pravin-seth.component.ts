import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pravin-seth',
  templateUrl: './pravin-seth.component.html',
  styleUrls: ['./pravin-seth.component.css'],
})
export class PravinSethComponent implements OnInit {
  constructor() {}
  demoDate;

  demoDate1;
  ngOnInit(): void {
    this.OnClickBtn();
  }
  date;
  date1;

  toDayDate() {
    this.date = new Date();
    console.log('Date = ' + this.date); //Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)
    this.demoDate = this.formatDate(this.date);
  }

  oneMonthAgoDate() {
    this.date1 = new Date();
    let m = this.date1.getMonth();
    this.date1.setMonth(this.date1.getMonth() - 1);

    console.log('++++++', this.date1);
    this.demoDate1 = this.formatDate(this.date1);
  }

  OnClickBtn() {
    this.toDayDate();
    this.oneMonthAgoDate();

    this.monthDiff(this.date, this.date1)
  }

  demoDateFn() {
    console.log('Demo Date : ', this.demoDate);

    console.log('New Date : ', this.formatDate(this.date));
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }
}
