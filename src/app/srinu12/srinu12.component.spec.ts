import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Srinu12Component } from './srinu12.component';

describe('Srinu12Component', () => {
  let component: Srinu12Component;
  let fixture: ComponentFixture<Srinu12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Srinu12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Srinu12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
