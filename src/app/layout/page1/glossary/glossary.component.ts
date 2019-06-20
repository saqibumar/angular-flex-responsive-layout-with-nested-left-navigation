import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {
  links = ['GamePlay', 'Tutorial', 'Warnings'];
  activeLink = this.links[0];
  background = 'lightyellow';

  constructor() { }

  ngOnInit() {
  }

}
