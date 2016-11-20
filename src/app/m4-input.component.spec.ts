/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { M4InputComponent } from './m4-input.component';

describe('M4InputComponent', () => {
  let component: M4InputComponent;
  let fixture: ComponentFixture<M4InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M4InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M4InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
