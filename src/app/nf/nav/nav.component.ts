import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username:String = " ";
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

}
