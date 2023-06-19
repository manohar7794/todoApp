/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavigtionComponent } from './navigtion.component';

describe('NavigtionComponent', () => {
  let component: NavigtionComponent;
  let fixture: ComponentFixture<NavigtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
