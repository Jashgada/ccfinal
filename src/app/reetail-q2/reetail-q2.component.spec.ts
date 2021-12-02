import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReetailQ2Component } from './reetail-q2.component';

describe('ReetailQ2Component', () => {
  let component: ReetailQ2Component;
  let fixture: ComponentFixture<ReetailQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReetailQ2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReetailQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
