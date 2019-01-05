import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InternshipsPageComponent} from './internships-page.component';


describe('LoginPageComponent', () => {
  let component: InternshipsPageComponent;
  let fixture: ComponentFixture<InternshipsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InternshipsPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
