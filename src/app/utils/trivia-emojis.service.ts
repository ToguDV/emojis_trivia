import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaEmojisService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://158.69.122.84:25568/api/Trivia');
  }
}
