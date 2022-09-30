import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ArrayResponse } from '../../models/array-response.model';
import { Document } from '../../models/document.model';
import { environment } from '../../environments/envinronment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  private readonly documentsApiUrl = `${environment.apiUrl}/${environment.apiVersion
    }/documents`;

  constructor(private http: HttpClient) { }

  /** Ritorna la lista degli utenti */
  public getDocuments(): Observable<ArrayResponse<Document>> {

    // let params = new HttpParams()
    // .set('numRows', pagination.itemsPerPage.toString())

    return this.http.get<ArrayResponse<Document>>(`${this.documentsApiUrl}`, {
      // params: params
    });
  }
}
