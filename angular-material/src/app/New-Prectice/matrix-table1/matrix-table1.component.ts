import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-table1',
  templateUrl: './matrix-table1.component.html',
  styleUrls: ['./matrix-table1.component.css'],
})
export class MatrixTable1Component implements OnInit {
  header = [];
  RowsData = [];
  constructor() {}

  ngOnInit(): void {
    const alttable = {
      I: {
        I: '0',
        'v subscript 1 (t)': '0',
        'R subscript 1': '2',
        'R subscript 2': '0',
        'R subscript 3': '0',
        'C subscript 2': '0',
        'C subscript 1': '0',
      },
      'v subscript 1 (t)': {
        I: '0',
        'v subscript 1 (t)': '0',
        'R subscript 1': '1',
        'R subscript 2': '1',
        'R subscript 3': '0',
        'C subscript 2': '1',
        'C subscript 1': '0',
      },
      'R subscript 1': {
        I: '1',
        'v subscript 1 (t)': '2',
        'R subscript 1': '0',
        'R subscript 2': '0',
        'R subscript 3': '0',
        'C subscript 2': '1',
        'C subscript 1': '0',
      },
      'R subscript 2': {
        I: '0',
        'v subscript 1 (t)': '1',
        'R subscript 1': '0',
        'R subscript 2': '0',
        'R subscript 3': '0',
        'C subscript 2': '0',
        'C subscript 1': '1',
      },
      'R subscript 3': {
        I: '0',
        'v subscript 1 (t)': '0',
        'R subscript 1': '0',
        'R subscript 2': '0',
        'R subscript 3': '0',
        'C subscript 2': '2',
        'C subscript 1': '2',
      },
      'C subscript 2': {
        I: '0',
        'v subscript 1 (t)': '2',
        'R subscript 1': '1',
        'R subscript 2': '0',
        'R subscript 3': '2',
        'C subscript 2': '0',
        'C subscript 1': '0',
      },
      'C subscript 1': {
        I: '0',
        'v subscript 1 (t)': '0',
        'R subscript 1': '0',
        'R subscript 2': '2',
        'R subscript 3': '1',
        'C subscript 2': '0',
        'C subscript 1': '0',
      },
    };
    this.getAltTableData(alttable);
  }

  getAltTableData(res) {
    this.header = [];
    this.RowsData = [];
    console.log('Data *** ', res);
    this.header = Object.keys(res);
    // console.log('Header Array : ', this.header);
    for (let i = 0; i < this.header.length; i++) {
      this.RowsData.push(res[this.header[i]]);
    }
    console.log('Row Data : ', this.RowsData);
  }
  setAltTableData() {
    let dummyJSON: any = {};
    for (let i = 0; i < this.header.length; i++) {
      var newKey = this.header[i];
      var newVal = this.RowsData[i];
      dummyJSON[newKey] = newVal;
    }
    console.log('Latest Data ===> ', dummyJSON);
    return dummyJSON;
  }
  onInsert(val, rowIndex, colIndex) {
    this.RowsData[rowIndex][this.header[colIndex]] = val;
    console.log(
      'Updated Data : ',
      this.RowsData[rowIndex][this.header[colIndex]]
    );
  }
  onUpdateColumn(val, colIndex) {
    // console.log('Inserted Column Value : ', val);
    // console.log('Column Index : ', colIndex);
    this.RowsData.forEach((obj) =>
      this.renameKey(obj, this.header[colIndex], val)
    );
    this.header[colIndex] = val;
    // console.log('Updated Rows Data : ', this.RowsData);
  }

  renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  addRowCol() {
    this.header.push('');
    // console.log('New Header : ', this.header);
    let dummyJSON: any = {};
    for (let i = 0; i < this.header.length; i++) {
      var newKey = this.header[i];
      var newVal = '';
      dummyJSON[newKey] = newVal;
    }
    // console.log('Dummny JSON : ', dummyJSON);

    this.RowsData.push(dummyJSON);
  }
  deleteRowCol(rowIndex) {
    // console.log('Delete Row Index : ', rowIndex);
    let key = this.header[rowIndex];
    this.header.splice(rowIndex, 1);
    this.RowsData.splice(rowIndex, 1);
    this.RowsData.forEach((obj) => this.deleteKey(obj, key));
    // console.log('Row Data ==> ', this.RowsData);
  }
  deleteKey(obj, key) {
    delete obj[key];
  }
}
