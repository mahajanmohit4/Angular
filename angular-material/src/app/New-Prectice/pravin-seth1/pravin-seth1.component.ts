import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pravin-seth1',
  templateUrl: './pravin-seth1.component.html',
  styleUrls: ['./pravin-seth1.component.css'],
})
export class PravinSeth1Component implements OnInit {
  fromDate;
  toDate;
  checkMonth: Number;

  oneMonthDate;
  threeMonthDate;
  sixMonthDate;

  currentDate;
  sixMonthOldDate;

  fixMonths: boolean = false;
  customMonths: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.fixMonths = true;
    this.currentDateFun();
    this.oneMonthAgoDate();
  }

  currentDateFun() {
    this.currentDate = new Date();
    this.currentDate = this.formatDate(this.currentDate);

    // Six Month Old Date
    this.sixMonthOldDate = new Date();

    this.sixMonthOldDate.setMonth(this.sixMonthOldDate.getMonth() - 6);
    this.sixMonthOldDate = this.formatDate(this.sixMonthOldDate);
  }
  oneMonthAgoDate() {
    this.fixMonths = true;
    this.customMonths = false;
    this.toDate = new Date();
    const one = new Date(this.toDate);

    one.setMonth(one.getMonth() - 1);

    console.log('toDate -> ', one);
    this.toDate = this.formatDate(this.toDate);
    this.fromDate = this.formatDate(one);
    this.checkMonth = 1;
    this.oneMonthDate = this.formatDate(one);
  }

  threeMonthAgoDate() {
    this.fixMonths = true;
    this.customMonths = false;
    this.toDate = new Date();
    const three = new Date(this.toDate);

    three.setMonth(three.getMonth() - 3);

    console.log('toDate -> ', three);
    this.toDate = this.formatDate(this.toDate);
    this.fromDate = this.formatDate(three);
    this.checkMonth = 3;
    this.threeMonthDate = this.formatDate(three);
  }

  sixMonthAgoDate() {
    this.fixMonths = true;
    this.customMonths = false;
    this.toDate = new Date();
    const six = new Date(this.toDate);

    six.setMonth(six.getMonth() - 6);

    console.log('toDate -> ', six);
    this.toDate = this.formatDate(this.toDate);
    this.fromDate = this.formatDate(six);
    this.checkMonth = 6;
    this.sixMonthDate = this.formatDate(six);
  }
  customSixMonthOld;
  customBtn() {
    this.fixMonths = false;
    this.customMonths = true;
    this.toDate = '';
    this.fromDate = '';
    this.checkMonth = 0;
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

  checkCustom() {
    console.log('From Date : ', this.fromDate);
    console.log('To Date : ', this.toDate);

    const d = new Date(this.toDate);
    d.setMonth(d.getMonth() - 6);
    this.customSixMonthOld = this.formatDate(d);

    const months = this.monthDiff(this.fromDate, this.toDate);
    console.log('Months --> ', months);

    const dates = this.dateDiff(this.fromDate, this.toDate);
    console.log('Date Diff --> ', dates);

    if (dates == 0) {
      this.checkMonth = months;
    } else {
      this.checkMonth = 0;
    }
  }

  monthDiff(d1, d2) {
    var months;
    d2 = new Date(d2);
    d1 = new Date(d1);

    console.log(d2.getFullYear());

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    // console.log('Months1 : ', d1.getMonth());
    // console.log('Months2 : ', d2.getMonth());
    months -= d1.getMonth();
    months += d2.getMonth();
    return months;
  }

  dateDiff(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);

    const d = date1.getDate() - date2.getDate();

    return d;
  }
}
