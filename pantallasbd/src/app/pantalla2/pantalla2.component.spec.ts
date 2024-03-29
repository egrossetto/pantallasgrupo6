/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pantalla2Component } from './pantalla2.component';

describe('Pantalla2Component', () => {
  let component: Pantalla2Component;
  let fixture: ComponentFixture<Pantalla2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pantalla2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pantalla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
