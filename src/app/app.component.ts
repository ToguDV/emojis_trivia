import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PuzzleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emojis_trivia';
  randomNumber = NaN;

  constructor() {
  }

  ngOnInit(){
    this.randomNumber = Math.random();
  }
  

}
