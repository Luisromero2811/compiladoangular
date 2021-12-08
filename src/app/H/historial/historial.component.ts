import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  ShowVolley = true;
  ShowSoccer= false;
  ShowBasquet= false;
  ShowNata= false;
  constructor() { }
  ShowVolleys(){
    this.ShowVolley = true
    this.ShowSoccer = false
    this.ShowBasquet = false
    this.ShowNata = false
  }
  ShowSoccers(){
    this.ShowVolley = false
    this.ShowSoccer = true
    this.ShowBasquet = false
    this.ShowNata = false
  }
  ShowBasquets(){
    this.ShowVolley = false
    this.ShowSoccer = false
    this.ShowBasquet = true
    this.ShowNata = false
  }
  ShowNatas(){
    this.ShowVolley = false
    this.ShowSoccer = false
    this.ShowBasquet = false
    this.ShowNata = true
  }
  ngOnInit(): void {
  }

}
