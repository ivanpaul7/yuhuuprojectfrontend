import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProfile } from './mini-profile.component';

describe('MiniProfile', () => {
  let component: MiniProfile;
  let fixture: ComponentFixture<MiniProfile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProfile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
