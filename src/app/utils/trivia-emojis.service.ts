import { Injectable } from '@angular/core';
import { Console } from 'console';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class TriviaEmojisService {

  constructor() { }

  async getRandomTrivia() {

    let datito1;
    let datazo = ["", ""];
    try {
      const response = await fetch('https://localhost:7037/api/Trivia');
      const data = await response.json();
      datito1 = data;
      console.log(datito1[0].emojis);
      datazo = [datito1[0].emojis, ""];
    } catch (error) {
      console.error('Error fetching data:', error);
      datazo = ["error", "error"];
    }

    return datazo;
  }

  getAnswer(id: string) {
    return id;
  }
}
