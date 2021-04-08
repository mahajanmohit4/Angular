import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operator2Component } from './operator2.component';

describe('Operator2Component', () => {
  let component: Operator2Component;
  let fixture: ComponentFixture<Operator2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Operator2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Operator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
