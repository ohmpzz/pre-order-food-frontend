import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuFormComponent } from './commu-form.component';

describe('CommuFormComponent', () => {
  let component: CommuFormComponent;
  let fixture: ComponentFixture<CommuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
