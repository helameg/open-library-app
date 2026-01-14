import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './components/head-bar/head-bar';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { BookListComponent } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // ✅ Les composants standalone que tu utilises dans le HTML
  imports: [
    RouterOutlet,             // pour que <router-outlet> fonctionne
    HeadBarComponent,
    SearchBarComponent,
    BookListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ ici c'était `styleUrl`, ERREUR ! Doit être `styleUrls`
})
export class App {
  protected readonly title = signal('open-library-app');
}

