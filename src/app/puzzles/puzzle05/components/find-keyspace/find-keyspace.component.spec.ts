import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FindKeyspaceComponent } from './find-keyspace.component';

describe('FindKeyspaceComponent', () => {
  let component: FindKeyspaceComponent;
  let fixture: ComponentFixture<FindKeyspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindKeyspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindKeyspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});