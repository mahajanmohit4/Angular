import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCategorysPricingComponent } from './client-categorys-pricing.component';

describe('ClientCategorysPricingComponent', () => {
  let component: ClientCategorysPricingComponent;
  let fixture: ComponentFixture<ClientCategorysPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCategorysPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCategorysPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
