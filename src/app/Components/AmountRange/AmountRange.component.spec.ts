/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmountRangeComponent } from './AmountRange.component';

describe('AmountRangeComponent', () => {
  let component: AmountRangeComponent;
  let fixture: ComponentFixture<AmountRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
