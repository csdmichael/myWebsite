import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  standalone: false
})
export class PDFViewerComponent {
  @Input() pdfUrl: string = 'http://localhost:8100/assets/docs/CareerHighlights.pdf';
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;

  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
    this.isLoaded = true;
    console.log('PDF loaded with', this.totalPages, 'pages.');
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  ngOnInit() {
    console.log('PDF Viewer Component Initialized');
  }
}