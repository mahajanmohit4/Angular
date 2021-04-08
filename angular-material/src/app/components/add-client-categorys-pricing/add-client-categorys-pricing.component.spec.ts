import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientCategorysPricingComponent } from './add-client-categorys-pricing.component';

describe('AddClientCategorysPricingComponent', () => {
  let component: AddClientCategorysPricingComponent;
  let fixture: ComponentFixture<AddClientCategorysPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientCategorysPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientCategorysPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
