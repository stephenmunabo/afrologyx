import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerCardsComponent } from './flyer-cards.component';

describe('FlyerCardsComponent', () => {
  let component: FlyerCardsComponent;
  let fixture: ComponentFixture<FlyerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
