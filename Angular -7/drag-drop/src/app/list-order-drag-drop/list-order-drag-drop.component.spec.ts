import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderDragDropComponent } from './list-order-drag-drop.component';

describe('ListOrderDragDropComponent', () => {
  let component: ListOrderDragDropComponent;
  let fixture: ComponentFixture<ListOrderDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
