import { Component, Input, OnInit } from '@angular/core';
import { IProgram } from 'src/app/shared/madel';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
 @Input() program: IProgram;
  constructor() { }

  ngOnInit(): void {
  }

}
