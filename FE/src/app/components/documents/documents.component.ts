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
    this.DocumentService.getDocuments().subscribe((res: any) => {
      console.log(res.message);

      if (res.message !== "error") {
        this.documentList = res;
        this.loading = false;
      } else {
        console.log("error");

        this.loading = false;
      }
    })

  }

  downloadDocument(id: Number) {
    let idDocument = id;
    this.DocumentService.downloadDocument(idDocument).subscribe((res) => {
      if (res) {
        console.log('Download approvato');

      }
    })
  }

}
