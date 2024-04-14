import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaEmojisService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://emojisapi.caprover.togudv.com/api/Trivia');
  }
}
