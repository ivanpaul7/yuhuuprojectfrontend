import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditContactComponent } from './company-profile-edit-contact.component';

describe('CompanyProfileEditContactComponent', () => {
  let component: CompanyProfileEditContactComponent;
  let fixture: ComponentFixture<CompanyProfileEditContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
