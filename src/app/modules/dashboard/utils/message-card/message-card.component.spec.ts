import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCard } from './message-card.component';

describe('MessageCard', () => {
  let component: MessageCard;
  let fixture: ComponentFixture<MessageCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
