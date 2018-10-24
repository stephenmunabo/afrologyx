import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerksBoardComponent } from './perks-board.component';

describe('PerksBoardComponent', () => {
  let component: PerksBoardComponent;
  let fixture: ComponentFixture<PerksBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerksBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerksBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
