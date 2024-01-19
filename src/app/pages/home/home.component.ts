import { Component } from '@angular/core';
import { HomeTitleComponent } from '../../components/home-title/home-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainNews;
  recentNews;
  otherNews;

  constructor() {
    this.mainNews = dataFake[0];
    this.recentNews = dataFake.slice(1, 4);
    this.otherNews = dataFake.slice(4);
    console.log(this.recentNews);
  }
}
