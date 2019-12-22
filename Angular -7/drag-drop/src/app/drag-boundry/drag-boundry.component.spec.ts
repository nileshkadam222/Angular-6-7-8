import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragBoundryComponent } from './drag-boundry.component';

describe('DragBoundryComponent', () => {
  let component: DragBoundryComponent;
  let fixture: ComponentFixture<DragBoundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragBoundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragBoundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
