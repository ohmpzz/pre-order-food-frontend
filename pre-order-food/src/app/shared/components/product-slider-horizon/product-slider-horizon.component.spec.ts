import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderHorizonComponent } from './product-slider-horizon.component';

describe('ProductSliderHorizonComponent', () => {
  let component: ProductSliderHorizonComponent;
  let fixture: ComponentFixture<ProductSliderHorizonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSliderHorizonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSliderHorizonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
