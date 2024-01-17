import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  imageUrl: string = 'https://images.pexels.com/photos/19741881/pexels-photo-19741881/free-photo-of-fotografia-animal-fotografia-de-animais-bokeh-fora-de-foco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  imageDate: string = '16/01/2024';
  title: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, itaque repellendus!'

}
