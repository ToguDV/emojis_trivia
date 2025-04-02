import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaEmojisService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object // Detecta si es servidor o navegador
  ) { }

  getData(): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      // Solo hace la petición si está en el navegador
      return this.http.get('https://emojisapi.caprover.togudv.com/api/Trivia');
    } else {
      // Si está en el servidor, retorna un Observable vacío
      return of(null);
    }
  }
}
