import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditMapComponent } from './company-profile-edit-map.component';

describe('CompanyProfileEditMapComponent', () => {
  let component: CompanyProfileEditMapComponent;
  let fixture: ComponentFixture<CompanyProfileEditMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
