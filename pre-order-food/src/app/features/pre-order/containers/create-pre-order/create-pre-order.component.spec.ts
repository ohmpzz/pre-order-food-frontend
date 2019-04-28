import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePreOrderComponent } from './create-pre-order.component';

describe('CreatePreOrderComponent', () => {
  let component: CreatePreOrderComponent;
  let fixture: ComponentFixture<CreatePreOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePreOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePreOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
