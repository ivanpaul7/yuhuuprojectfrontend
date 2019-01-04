import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditBasicComponent } from './company-profile-edit-basic.component';

describe('CompanyProfileEditBasicComponent', () => {
  let component: CompanyProfileEditBasicComponent;
  let fixture: ComponentFixture<CompanyProfileEditBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
