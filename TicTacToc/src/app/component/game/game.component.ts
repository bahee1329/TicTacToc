import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  imports: [BoardComponent],
})
export class GameComponent {
  squares: any = [];
  counter: number = 0;
  xIsNext = true;
  winner = '';
  isDrow = '';
  freshPage = true;

  constructor(private api: ApiService) {}

  //start a new game
  newGame() {
    this.squares = Array(9).fill(null);
    this.counter = 0;
    this.winner = '';
    this.freshPage = false;
    this.isDrow = '';
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  //every click function
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      //console.log(idx);
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
    this.winner = this.calculateTheWinner();

    if (!this.winner && this.counter == 9) {
      this.isDrow = 'Drow';
    }

    //save the winner
    if (this.winner) {
      this.api.postTheWinner(this.winner).subscribe((id: any) => {
        console.log(id);
      });
    }

    //save drow match
    if (this.isDrow) {
      this.api.postTheWinner(this.isDrow).subscribe((id: any) => {
        console.log(id);
      });
    }
  }

  calculateTheWinner() {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    //avilable changes
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //console.log(a, b, c);
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
