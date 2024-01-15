import { Component } from '@angular/core';
import { HomeTitleComponent } from '../../components/home-title/home-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeTitleComponent,
    BigCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
