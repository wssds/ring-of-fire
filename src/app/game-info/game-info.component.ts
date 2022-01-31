import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Ace – Waterfall', description: 'Everyone should keep drinking until the person who picked the card stops. So who knows how long you will be going for!' },
    { title: '2 – is Choose', description: 'You can choose someone to drink.' },
    { title: '3 – is Me', description: 'You must drink.' },
    { title: '4 – is Wh0re', description: 'All girls must drink.' },
    { title: '5 – Thumb Master', description: 'When you put your thumb on the table everyone must follow and whomever is last must drink. You are the thumb master till someone else picks a five.' },
    { title: '6 – is Dicks', description: 'All guys drink.' },
    { title: '7 – is Heaven', description: 'Point your finger in the sky, whoever is last must drink.' },
    { title: '8 – is Mate', description: 'Choose someone to drink with you. He/she, your drinking buddy, should always drink with you.' },
    { title: '9 – Rhyme', description: 'Pick a word such as fog and the person next to you must rhyme with fog, like dog, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink.' },
    { title: '10 – Categories', description: 'Pick a category such as football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks.' },
    { title: 'Jack – Make a Rule', description: 'You can make up any rule that everyone has to follow, such as you can only drink with your left hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink.' },
    { title: 'Queen – Questions', description: 'Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks.' },
    { title: 'King – Pour!', description: 'You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!' },
  ];

  title: any;
  description: any;
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      console.log('current card is:', this.card);
      let cardNumber = this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
