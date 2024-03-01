import { ChangeDetectionStrategy, Component, Input, SimpleChanges} from '@angular/core';
import { TestService } from '../utils/test.service';
import { TriviaEmojisService } from '../utils/trivia-emojis.service';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent  {

  
  constructor(private triviaEmojis: TriviaEmojisService) {}
  randomNumber: string = "";

  ngOnInit(): void {
    this.randomNumber = this.triviaEmojis.getRandomTrivia();
  }

}
