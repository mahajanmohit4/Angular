import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCategoryPricingComponent } from './modify-category-pricing.component';

describe('ModifyCategoryPricingComponent', () => {
  let component: ModifyCategoryPricingComponent;
  let fixture: ComponentFixture<ModifyCategoryPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCategoryPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCategoryPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
