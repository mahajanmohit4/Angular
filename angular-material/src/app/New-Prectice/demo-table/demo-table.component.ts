import { Component, OnInit } from '@angular/core';
import { DemotableService } from './service/demotable.service';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css'],
})
export class DemoTableComponent implements OnInit {
  constructor(private dataService: DemotableService) {}
  data;
  data1;
  disColumn;
  ngOnInit(): void {
    // this.jsonData();
    // this.demo();
    // this.demo1();
    // this.demo2();
    this.demo3();
  }
  dataArr = [];
  onInsert(val, index, key) {
    console.log('inserted val', val);
    console.log('index : ', index);
    console.log('key : ', key);
    if (key == 'a') {
      console.log('arr index val : ', this.dataArr[index].a);
    } else if (key == 'b') {
      console.log('arr index val : ', this.dataArr[index].b);
    } else if (key == 'c') {
      console.log('arr index val : ', this.dataArr[index].c);
    } else if (key == 'd') {
      console.log('arr index val : ', this.dataArr[index].d);
    }
  }
  arrIndex(index) {
    console.log('index : ', index);
  }
  demo3() {
    this.data = {
      a: {
        a: 1,
        b: 1,
        c: 1,
        d: 1,
      },
      b: {
        a: 2,
        b: 2,
        c: 2,
        d: 2,
      },
      c: {
        a: 3,
        b: 3,
        c: 3,
        d: 3,
      },
      d: {
        a: 4,
        b: 4,
        c: 4,
        d: 4,
      },
    };
    this.data.a.a = 123;
    this.data1 = this.data;
    console.log('data1 --> ', this.data1);

    // console.log('sadf ', this.data.a.a);
    this.dataArr.push(this.data.a);
    this.dataArr.push(this.data.b);
    this.dataArr.push(this.data.c);
    this.dataArr.push(this.data.d);
    var k = Object.keys(this.data);
    this.disColumn = k;
  }
  demo2() {
    this.dataService.getData1().subscribe((res) => {
      console.log('new data --> ', res);
      var k = Object.keys(res);
      this.disColumn = k;
      this.data = res;
      this.dataArr.push(res.a);
      this.dataArr.push(res.b);
      this.dataArr.push(res.c);
      this.dataArr.push(res.d);
      console.log('columns ', k);
      console.log('data arr ', this.dataArr);
    });
  }
  demo() {
    var obj = {
      marka1: {
        name: 'Mika',
      },
      beti1: {
        name: 'Yii',
      },
    };
    var keys = Object.keys(obj);
    console.log(keys);
  }
  demo1() {
    this.dataService.getData().subscribe((res) => {
      console.log('data ==> ', res);

      console.log('data ==> ', res);
      for (let key of res) {
        console.log('key: ' + key + ',  value: ' + res[key]);
      }

      // console.log('col : ', k);
    });

    this.data = {
      'First Side V subscript S': {
        'First Side V subscript S': 0,
        'Second Side V subscript S': 0,
        'First Side 10 K': 1,
        'Second Side 10 K': 0,
        'First Side V subscript X': 0,
        'Second Side V subscript X': 0,
        'First Side 4 K 7': 0,
        'Second Side 4 K 7': 0,
      },
      'Second Side V subscript S': {
        'First Side V subscript S': 0,
        'Second Side V subscript S': 0,
        'First Side 10 K': 1,
        'Second Side 10 K': 0,
        'First Side V subscript X': 0,
        'Second Side V subscript X': 0,
        'First Side 4 K 7': 0,
        'Second Side 4 K 7': 0,
      },
    };
    var data1 = JSON.stringify(this.data);
    var d2 = JSON.parse(data1);
    console.log('converted data : ', data1);
    console.log('converted data : ', d2);
  }
  d;

  jsonData() {
    this.data = {
      'First Side V subscript S': {
        'First Side V subscript S': 0,
        'Second Side V subscript S': 0,
        'First Side 10 K': 1,
        'Second Side 10 K': 0,
        'First Side V subscript X': 0,
        'Second Side V subscript X': 0,
        'First Side 4 K 7': 0,
        'Second Side 4 K 7': 0,
      },
      'Second Side V subscript S': {
        'First Side V subscript S': 0,
        'Second Side V subscript S': 0,
        'First Side 10 K': 1,
        'Second Side 10 K': 0,
        'First Side V subscript X': 0,
        'Second Side V subscript X': 0,
        'First Side 4 K 7': 0,
        'Second Side 4 K 7': 0,
      },
    };
    this.disColumn = Object.keys(this.data);
    var k = Object.keys(this.data);
    // console.log(this.disColumn);
    // var d = 'First_Side_V_subscript_S';
    // console.log('single data ==> ', this.data.First_Side_V_subscript_S);
    var s = JSON.stringify(this.data);
    console.log('string data : ', s);
    var ss = s.replace(' ', '_');
    console.log('replace string data : ', ss);
  }
}
