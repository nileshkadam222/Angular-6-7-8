import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDragDropComponent } from './simple-drag-drop.component';

describe('SimpleDragDropComponent', () => {
  let component: SimpleDragDropComponent;
  let fixture: ComponentFixture<SimpleDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
