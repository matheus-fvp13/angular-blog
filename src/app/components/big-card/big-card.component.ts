import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() width: string = '400px';
  @Input() linkColor: string = '#FFF';
  @Input() imageUrl: string = ''
  @Input() imageDate: string = ''
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() id: string = '0'
}
