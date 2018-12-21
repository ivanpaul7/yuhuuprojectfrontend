import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InternshipDetailsPageComponent} from './internship-details-page.component';

describe('InternshipDetailsPageComponent', () => {
  let component: InternshipDetailsPageComponent;
  let fixture: ComponentFixture<InternshipDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InternshipDetailsPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
