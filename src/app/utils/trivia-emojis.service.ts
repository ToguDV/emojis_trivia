import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaEmojisService {

  constructor(private http: HttpClient) { }

  async getRandomTrivia() {

    let result = ["", ""];
    try {
      const response = await fetch('http://158.69.122.84:25568/api/Trivia');
      const data = await response.json();
      const random = Math.floor(Math.random() * data.length);
      result = [data[random].emojis, data[random].title];
    } catch (error) {
      console.error('Error fetching data:', error);
      result = ["error", "error"];
    }

    return result;
  }

  getAnswer(id: string) {
    return id;
  }


  getData() {
    return this.http.get('http://158.69.122.84:25568/api/Trivia');
  }
}
