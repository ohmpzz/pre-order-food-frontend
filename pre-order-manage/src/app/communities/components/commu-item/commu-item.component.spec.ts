import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuItemComponent } from './commu-item.component';

describe('CommuItemComponent', () => {
  let component: CommuItemComponent;
  let fixture: ComponentFixture<CommuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
