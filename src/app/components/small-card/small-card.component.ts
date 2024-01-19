import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() id: string = '0';
  @Input() imageUrl: string = 'https://images.pexels.com/photos/19741881/pexels-photo-19741881/free-photo-of-fotografia-animal-fotografia-de-animais-bokeh-fora-de-foco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  @Input() imageDate: string = '16/01/2024';
  @Input() title: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, itaque repellendus!'
}
