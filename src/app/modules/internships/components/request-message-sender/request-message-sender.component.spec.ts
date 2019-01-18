import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMessageSenderComponent } from './request-message-sender.component';

describe('RequestMessageSenderComponent', () => {
  let component: RequestMessageSenderComponent;
  let fixture: ComponentFixture<RequestMessageSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMessageSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMessageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
