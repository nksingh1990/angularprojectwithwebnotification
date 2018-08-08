import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  name="nagendra";
  constructor() { }

  ngOnInit() {
    this.name="nagendra 1234567";
  }

}
