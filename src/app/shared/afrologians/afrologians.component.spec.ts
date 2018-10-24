import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfrologiansComponent } from './afrologians.component';

describe('AfrologiansComponent', () => {
  let component: AfrologiansComponent;
  let fixture: ComponentFixture<AfrologiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfrologiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfrologiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
