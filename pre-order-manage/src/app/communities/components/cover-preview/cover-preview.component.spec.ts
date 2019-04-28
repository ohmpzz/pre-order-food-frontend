import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPreviewComponent } from './cover-preview.component';

describe('CoverPreviewComponent', () => {
  let component: CoverPreviewComponent;
  let fixture: ComponentFixture<CoverPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
