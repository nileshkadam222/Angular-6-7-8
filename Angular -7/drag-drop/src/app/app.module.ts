import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SimpleDragDropComponent } from './simple-drag-drop/simple-drag-drop.component';
import { ListOrderDragDropComponent } from './list-order-drag-drop/list-order-drag-drop.component';
import { ToDoApplicationComponent } from './to-do-application/to-do-application.component';
import { DragHandleComponent } from './drag-handle/drag-handle.component';
import { DragPreviewComponent } from './drag-preview/drag-preview.component';
import { DragPlaceholderComponent } from './drag-placeholder/drag-placeholder.component';
import { DragBoundryComponent } from './drag-boundry/drag-boundry.component'

@NgModule({
  declarations: [
    AppComponent,
    SimpleDragDropComponent,
    ListOrderDragDropComponent,
    ToDoApplicationComponent,
    DragHandleComponent,
    DragPreviewComponent,
    DragPlaceholderComponent,
    DragBoundryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
