import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list';
import { BookDetailsComponent } from './components/book-details/book-details';

export const routes: Routes = [
  { path: '', component: BookListComponent }, // ✅ page d’accueil = liste des livres
  { path: 'books/:id', component: BookDetailsComponent }
];
