import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: any;
  game!: Game;


  constructor(private Angularfirestore: Firestore ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    // this
    // .firestore
    // .collection('items')
    // .valueChanges();
    // .subscribe((game: any) => {
    //   console.log('Game update', game);
    // });
  }

  newGame() {
    this.game = new Game();

  }

  takeCard() {
    if (this.game.players.length > 0) {
      if (!this.pickCardAnimation) {
        this.currentCard = this.game.stack.pop(); //pop () method removes the last element from an array and returns that element.
        this.pickCardAnimation = true;
        console.log('New card: ' + this.currentCard);
        console.log('Game is', this.game);

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        setTimeout(() => {
          this.game.playedCards.push(this.currentCard);
          this.pickCardAnimation = false;

        }, 1000);
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}
