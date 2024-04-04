import { Component} from '@angular/core';
import { TriviaEmojisService } from '../utils/trivia-emojis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent  {

  
  constructor(private triviaEmojis: TriviaEmojisService) {}
  emojis: string = "";
  trivia: string[] = ["", ""];
  isAnswered: boolean = false;
  input: string = "";
  answer: string = ''
  data: any;

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

    this.onReload();
    
  }

  onAnswer(): void {
    this.isAnswered = true;
    this.answer = this.triviaEmojis.getAnswer(this.trivia[1]);
  }

  onInput(event: Event): void {
    this.input = (event.target as HTMLInputElement).value;
  }

  async onReload() : Promise<void> {
    this.triviaEmojis.getData().subscribe(data => {
      this.data = data;
      const random = Math.floor(Math.random() * this.data.length);
      this.trivia = [this.data[random].emojis, this.data[random].title];
      this.emojis = this.trivia[0];
    });
    this.isAnswered = false;
    this.input = "";
  }



}
