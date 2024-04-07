import { Component} from '@angular/core';
import { TriviaEmojisService } from '../utils/trivia-emojis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({ opacity: 0 }),
  animate('1s ease-in', style({ opacity: 1 }))
]
);
const fadeIn = trigger('fadeIn', [enterTransition]);

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css',
  animations: [fadeIn]
})
export class PuzzleComponent  {

  
  constructor(private triviaEmojis: TriviaEmojisService) {}
  emojis: string = "";
  trivia: string[] = ["", "", ""];
  isAnswered: boolean = false;
  description: string = "";
  input: string = "";
  answer: string = '';
  data: any;

  isShown = false;

  ngOnInit(): void {
    
    console.log(`
    
    ##############################
    ############..################
    ######..######.(#####..#######
    %%%%####..####.(#####..#######
    ##..####.............#########
    ##............%%%..####..#####
    ######......%&...........#####
    ##########...........#########
    ##########.......#############
    ##########%%  %###############
    ##########%%%&.(##############
    ##########%&...(##############
                                      
 
    
    `);

    this.randomEmoji();
    
  }

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  onAnswer(): void {
    this.isAnswered = true;
    this.answer = this.trivia[1];
  }

  onInput(event: Event): void {
    this.input = (event.target as HTMLInputElement).value;
  }

  async randomEmoji() : Promise<void> {
    
    this.triviaEmojis.getData().subscribe(data => {
      this.data = data;
      const random = Math.floor(Math.random() * this.data.length);
      this.trivia = [this.data[random].emojis, this.data[random].title, this.data[random].description];
      this.emojis = this.trivia[0];
      this.description = this.trivia[2];
    });
    this.isAnswered = false;
    this.input = "";
    this.fadeInOut();
  }



}
