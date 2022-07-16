import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  title = "Brolexios"
  navLinks = [];

  
  constructor() { }

  ngOnInit(): void {
  }

}
