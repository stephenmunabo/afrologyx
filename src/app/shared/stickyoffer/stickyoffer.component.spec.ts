import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyofferComponent } from './stickyoffer.component';

describe('StickyofferComponent', () => {
  let component: StickyofferComponent;
  let fixture: ComponentFixture<StickyofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
