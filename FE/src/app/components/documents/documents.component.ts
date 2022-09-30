import { Component, Input, OnInit } from '@angular/core';

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

  public loading = true;
  public documentList: ArrayResponse<Document>;

  constructor(
    public DocumentService: DocumentsService
  ) {
    this.documentList
  }

  ngOnInit() {
    setTimeout(() => {
      this.DocumentService.getDocuments().subscribe((res: ArrayResponse<Document>) => {
        if (res) {
          this.documentList = res;
          console.log(this.documentList);
        }
        this.loading = false;
      })
    }, 5000)
  }

}
