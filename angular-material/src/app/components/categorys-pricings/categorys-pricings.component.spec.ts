import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysPricingsComponent } from './categorys-pricings.component';

describe('CategorysPricingsComponent', () => {
  let component: CategorysPricingsComponent;
  let fixture: ComponentFixture<CategorysPricingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysPricingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysPricingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
