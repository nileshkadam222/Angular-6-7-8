import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})

export class PdfViewerComponent implements OnInit {
  pdfSrc: string = '../assets/files/sample.pdf';
  pdfSelectedText : String = 'No Selection';
  top = 0;
  left = 0;
  constructor() { }

  ngOnInit() {
  }

  getSelectedText() {
    debugger;
    if (window.getSelection) {
      this.pdfSelectedText = window.getSelection().toString();
      var textLayer = document.getElementsByClassName('textLayer')
      this.top = window.getSelection().getRangeAt(0).getClientRects()[0].left - textLayer[0].getBoundingClientRect().left;
      this.left= window.getSelection().getRangeAt(0).getClientRects()[0].top - textLayer[0].getBoundingClientRect().top;
    }else{
      this.pdfSelectedText = "No Selection";
      this.top = 0;
      this.left = 0;
    }
    return '';
}

}
