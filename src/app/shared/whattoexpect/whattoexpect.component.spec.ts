import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhattoexpectComponent } from './whattoexpect.component';

describe('WhattoexpectComponent', () => {
  let component: WhattoexpectComponent;
  let fixture: ComponentFixture<WhattoexpectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhattoexpectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhattoexpectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
