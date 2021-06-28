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
    this.sixMonthAgoDate();
  }
  date;
  date1;
  month;
  sixMonthOldDate;
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

  sixMonthAgoDate() {
    const d = new Date();

    d.setMonth(d.getMonth() - 6);
    this.sixMonthOldDate = this.formatDate(d);
    console.log('sixMonthOldDate ++++++ ', this.sixMonthOldDate);
  }

  OnClickBtn() {
    this.toDayDate();
    this.oneMonthAgoDate();

    this.tryFun();
  }

  demoDateFn() {
    console.log('Demo Date1 : ', this.demoDate);
    console.log('Demo Date2: ', this.demoDate1);

    const d1 = new Date(this.demoDate);
    const d2 = new Date(this.demoDate1);

    console.log(d1, ' --- ', d2);

    console.log('Calculated Months :-- > ', this.monthDiff(d1, d2));
    this.month = this.monthDiff(d1, d2);
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

  monthDiff(d2, d1) {
    var months;
    console.log('d2 --> ', d2);
    console.log('d1 --> ', d1);

    console.log(d2.getFullYear());

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    console.log('Months1 : ', d1.getMonth());
    console.log('Months2 : ', d2.getMonth());
    months -= d1.getMonth();
    months += d2.getMonth();
    return months;
  }

  tryFun() {
    const date1 = new Date('7/13/2010');
    const date2 = new Date('7/13/2010');
    console.log('Day : ', getDifferenceInDays(date1, date2));
    console.log('Hours', getDifferenceInHours(date1, date2));
    console.log('Minuts', getDifferenceInMinutes(date1, date2));
    console.log('Second ', getDifferenceInSeconds(date1, date2));

    function getDifferenceInDays(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / (1000 * 60 * 60 * 24);
    }

    function getDifferenceInHours(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / (1000 * 60 * 60);
    }

    function getDifferenceInMinutes(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / (1000 * 60);
    }

    function getDifferenceInSeconds(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / 1000;
    }
  }
}
