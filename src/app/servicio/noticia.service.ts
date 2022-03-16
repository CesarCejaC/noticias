import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, Noticias } from '../interfaz';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) {}

  lineas(): Observable<Article[]> {
    return this.http
      .get<Noticias>(
        'https://newsapi.org/v2/top-headlines?country=us&category=business',
        {
          params: {
            apikey: apiKey,
          },
        }
      )
      .pipe(map((resp) => resp.articles));
  }
}
