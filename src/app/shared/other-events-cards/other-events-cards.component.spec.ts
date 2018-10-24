import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEventsCardsComponent } from './other-events-cards.component';

describe('OtherEventsCardsComponent', () => {
  let component: OtherEventsCardsComponent;
  let fixture: ComponentFixture<OtherEventsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherEventsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherEventsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
