import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  show = true;

  phrase: any =  {
    author:  'Ben Parker',
    message: 'With great power comes great responsibility'
  };

  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

  toggleVisibility(): void {
    this.show = !this.show;
  }

}
