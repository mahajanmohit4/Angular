import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotable1',
  templateUrl: './demotable1.component.html',
  styleUrls: ['./demotable1.component.css'],
})
export class Demotable1Component implements OnInit {
  header = ['Status1', 'Status2', 'Status3'];
  RowsData = [
    {
      Status1: 'A',
      Status2: 'B',
      Status3: 'C',
    },
    {
      Status1: 'D',
      Status2: 'E',
      Status3: 'F',
    },
    {
      Status1: 'G',
      Status2: 'H',
      Status3: 'I',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onInsert(val, rowIndex, colIndex) {
    console.log('Inserted Value : ', val);
    console.log('Row Index : ', rowIndex);
    console.log('Column Index : ', colIndex);
    console.log('Data : ', this.RowsData[rowIndex][this.header[colIndex]]);
    this.RowsData[rowIndex][this.header[colIndex]] = val;
    console.log(
      'Updated Data : ',
      this.RowsData[rowIndex][this.header[colIndex]]
    );
    console.log('Updated Rows Data : ', this.RowsData);
  }
  onUpdateColumn(val, colIndex) {
    console.log('Inserted Column Value : ', val);
    console.log('Column Index : ', colIndex);
    this.RowsData.forEach((obj) =>
      this.renameKey(obj, this.header[colIndex], val)
    );
    this.header[colIndex] = val;
    console.log('Updated Rows Data : ', this.RowsData);
  }

  getRowKeyValue() {
    for (let obj of this.RowsData) {
      console.log('object:', obj);
      for (let key in obj) {
        console.log('      key:', key, 'value:', obj[key]);
      }
    }
  }

  renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
}
