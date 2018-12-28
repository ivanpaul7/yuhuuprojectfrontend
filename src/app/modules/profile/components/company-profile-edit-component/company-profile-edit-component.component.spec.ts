import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditComponentComponent } from './company-profile-edit-component.component';

describe('CompanyProfileEditComponentComponent', () => {
  let component: CompanyProfileEditComponentComponent;
  let fixture: ComponentFixture<CompanyProfileEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
