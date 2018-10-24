import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perks-board',
  templateUrl: './perks-board.component.html',
  styleUrls: ['./perks-board.component.css']
})
export class PerksBoardComponent implements OnInit {

  perkCats: any = [
    {name: 'Restaurant and Dining'},
    {name: 'Barbers and hair stylist'},
    {name: 'Events Vip'},
    {name: 'Fashion Wear'},
    {name: 'Business Services'},
    {name: 'Food Shopping'},
    {name: 'Event Hall Rentals'},
    {name: 'Internet Discounts'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
