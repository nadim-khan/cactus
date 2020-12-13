import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asssignment1Component } from './asssignment1.component';

describe('Asssignment1Component', () => {
  let component: Asssignment1Component;
  let fixture: ComponentFixture<Asssignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asssignment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
