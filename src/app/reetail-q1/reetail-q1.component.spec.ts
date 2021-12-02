import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReetailQ1Component } from './reetail-q1.component';

describe('ReetailQ1Component', () => {
  let component: ReetailQ1Component;
  let fixture: ComponentFixture<ReetailQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReetailQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReetailQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
