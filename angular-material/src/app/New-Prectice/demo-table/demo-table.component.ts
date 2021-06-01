import { Component, OnInit } from '@angular/core';
import { Demotable } from './model/demotable.model';
import { DemotableService } from './service/demotable.service';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css'],
})
export class DemoTableComponent implements OnInit {
  constructor(private dataService: DemotableService) {}
  data;
  data1 = {};
  disColumn;
  ngOnInit(): void {
    // this.jsonData();
    // this.demo();
    // this.demo1();
    // this.demo2();
    this.demo3();
    this.newWork();
    this.demo4();
  }
  employee;
  data07;
  demo4() {
    this.dataService.getData().subscribe((res) => {
      console.log('JSON DATA ++++++ ', res);
      console.log('row one ', res['20 k']['G1U']);
    });
    this.employee = [
      {
        idemployee: 1,
        name: 'Ernest',
        surename: 'Pająk',
        role: 'Obsługa Baru',
        employeehours: [
          {
            idemployeehours: 1,
            date: '2019-01-10T23:00:00.000+0000',
            quantity: 8.0,
          },
        ],
      },
    ];

    this.data07 = [
      {
        'a a': [
          {
            'a a': 1,
            b: 1,
            c: 1,
            d: 1,
          },
        ],
        b: [
          {
            'a a': 2,
            b: 2,
            c: 2,
            d: 2,
          },
        ],
      },
    ];
  }
  isArray(value) {
    return value instanceof Array;
  }

  //Work on Data
  // newData: Demotable = new Demotable();
  newData: any;
  demoRow: string[] = ['a', 'b', 'c', 'd'];
  addRowCol: boolean = false;
  colName = '';
  newWork() {
    this.newData = this.data;
    console.log('New Data is ===> ', this.newData);
  }
  submit() {
    let mohit: any = 'mauli';
    this.newData.a.mohit = 'asdf';
    console.log('latest new data ++++++++', this.newData);
  }
  onSelectFile(event: any) {
    console.log('event +++ ');
    this.newData.a.event.target.value = 'asdf';
  }
  addData() {
    this.addRowCol = true;
  }

  // Old Work
  dataArr = [];
  onInsert(val, index, key) {
    console.log('inserted val', val);
    console.log('index : ', index);
    console.log('key : ', key);
    if (key == 'a') {
      console.log('arr index val : ', this.dataArr[index].a);
      this.dataArr[index].a = val;
      console.log('new arr ', this.dataArr);
    } else if (key == 'b') {
      console.log('arr index val : ', this.dataArr[index].b);
      this.dataArr[index].b = val;
    } else if (key == 'c') {
      console.log('arr index val : ', this.dataArr[index].c);
      this.dataArr[index].c = val;
    } else if (key == 'd') {
      console.log('arr index val : ', this.dataArr[index].d);
      this.dataArr[index].d = val;
    }
    this.data1 = {
      a: this.dataArr[0],
      b: this.dataArr[1],
      c: this.dataArr[2],
      d: this.dataArr[3],
    };
    console.log('letest data ==> ', this.data1);
  }
  arrIndex(index) {
    console.log('index : ', index);
  }
  demo3() {
    // this.dataService.getData1().subscribe((res) => {
    //   this.data = res;
    //   console.log('data1 --> ', res);
    // });
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
    this.data1 = [this.data];
    this.data.a.a = 123;
    this.data1 = this.data;
    console.log('data1 --> ', this.data1);
    // console.log('sadf ', this.data.a.a);
    this.dataArr.push(this.data.a);
    this.dataArr.push(this.data.b);
    this.dataArr.push(this.data.c);
    this.dataArr.push(this.data.d);
    console.log('data array --> ', this.dataArr);
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
