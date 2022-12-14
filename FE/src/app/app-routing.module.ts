import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './components/documents/documents.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
