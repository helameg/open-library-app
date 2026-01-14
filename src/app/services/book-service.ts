import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  // 📚 Tous les livres
  getBooks(): Observable<any> {
    return this.http.get<any>(
      'https://openlibrary.org/subjects/computers.json?limit=100'
    );
  }

  // 📘 Détails d’un livre
  getBookById(id: string): Observable<any> {
    return this.http.get<any>(
      `https://openlibrary.org/works/${id}.json`
    );
  }

  // 🔍 Recherche par titre
  getBooksByTitle(title: string): Observable<any> {
    return this.http.get<any>(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    );
  }
}
