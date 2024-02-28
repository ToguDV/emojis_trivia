import { Component} from '@angular/core';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent  {
  ngOnInit() {
    this.example();
  }

  example() {
    console.log("exampleee")
  }

}
