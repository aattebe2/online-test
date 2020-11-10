import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeActive(): void {
    document.getElementById('navTests').className = "nav-item";
    document.getElementById('navInstructions').className = "nav-item";
    document.getElementById('navAbout').className = "nav-item";
  }

  testsActive(): void {
    document.getElementById('navTests').className = "nav-item active";
    document.getElementById('navInstructions').className = "nav-item";
    document.getElementById('navAbout').className = "nav-item";
  }

  instructionsActive(): void {
    document.getElementById('navTests').className = "nav-item";
    document.getElementById('navInstructions').className = "nav-item active";
    document.getElementById('navAbout').className = "nav-item";
  }

  aboutActive(): void {
    document.getElementById('navTests').className = "nav-item";
    document.getElementById('navInstructions').className = "nav-item";
    document.getElementById('navAbout').className = "nav-item active";
  }

}
