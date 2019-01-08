import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XYLineChartComponent } from './xyline-chart.component';

describe('XYLineChartComponent', () => {
  let component: XYLineChartComponent;
  let fixture: ComponentFixture<XYLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XYLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XYLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
