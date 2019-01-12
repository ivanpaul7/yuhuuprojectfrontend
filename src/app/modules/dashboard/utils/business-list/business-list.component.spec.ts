import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessList } from './business-list.component';

describe('BusinessList', () => {
  let component: BusinessList;
  let fixture: ComponentFixture<BusinessList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
