import { Injectable } from '@angular/core';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TriviaEmojisService {

  constructor() { }

  getRandomTrivia() {
    let emojis: string[] = ["😁🤪🤧😬🤥😴", "😴😴😴😴", "😬🤥😬🤥😬🤥", "😁🤪😁🤪😁🤪"];
    let emoji: string = emojis[Math.floor(Math.random() * emojis.length)];
    console.log("b")
    return emoji;
  }
}
