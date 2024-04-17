import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './component/game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, GameComponent],
})
export class AppComponent {
  title = 'TicTacToc';
}
