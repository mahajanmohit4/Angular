
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
})
export class ExpansionPanelComponent implements OnInit {
  
  ngOnInit(): void {}

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    
  ) {  
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

   registerHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    
  }
}
