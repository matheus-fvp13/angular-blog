import { Component } from '@angular/core';
import { HomeTitleComponent } from '../../components/home-title/home-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeTitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
