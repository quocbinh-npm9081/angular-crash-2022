/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GirlComponent } from './Girl.component';

describe('GirlComponent', () => {
  let component: GirlComponent;
  let fixture: ComponentFixture<GirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
