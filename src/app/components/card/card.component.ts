import { Component, Input } from '@angular/core';
import { IProgram } from 'src/app/@type/madel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
 @Input() cardItem: IProgram;
}
