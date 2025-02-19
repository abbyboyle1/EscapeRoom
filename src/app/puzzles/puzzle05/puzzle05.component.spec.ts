import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Puzzle05Component} from './puzzle05.component';

describe('PuzzlplantsComponent', () => {
  let component: Puzzle05Component;
  let fixture: ComponentFixture<Puzzle05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});