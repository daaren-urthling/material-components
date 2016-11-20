/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { M4StaticComponent } from './m4-static.component';

describe('M4StaticComponent', () => {
  let component: M4StaticComponent;
  let fixture: ComponentFixture<M4StaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M4StaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M4StaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
