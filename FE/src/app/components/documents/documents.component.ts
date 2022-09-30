import { Component, OnInit } from '@angular/core';

// Services
import { DocumentsService } from '../documents/documents.service';

// Models
import { ArrayResponse } from '../../models/array-response.model';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  public documentList: Document[];

  constructor(
    public DocumentService: DocumentsService
  ) {
    this.documentList = []
  }

  ngOnInit() {
    this.DocumentService.getDocuments().subscribe((res) => {
      console.log(res);

    })
  }

}
