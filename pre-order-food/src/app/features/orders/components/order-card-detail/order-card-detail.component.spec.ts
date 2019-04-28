import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardDetailComponent } from './order-card-detail.component';

describe('OrderCardDetailComponent', () => {
  let component: OrderCardDetailComponent;
  let fixture: ComponentFixture<OrderCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
