import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipEditSkillComponent } from './internship-edit-skill.component';

describe('InternshipEditSkillComponent', () => {
  let component: InternshipEditSkillComponent;
  let fixture: ComponentFixture<InternshipEditSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipEditSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipEditSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
