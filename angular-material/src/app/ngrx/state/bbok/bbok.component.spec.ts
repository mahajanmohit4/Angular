import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbokComponent } from './bbok.component';

describe('BbokComponent', () => {
  let component: BbokComponent;
  let fixture: ComponentFixture<BbokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
