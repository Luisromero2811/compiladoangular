import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  ShowTablero = true;
  ShowRegister = false;
  ShowList= false;
  ShowHist= false;
  ShowPay= false;
  constructor() { }
  ShowRegisters(){
    this.ShowRegister = true
    this.ShowHist = false
    this.ShowList = false
    this.ShowPay = false
    this.ShowTablero = false
  }
  ShowLists(){
    this.ShowList = true
    this.ShowHist = false
    this.ShowRegister = false
    this.ShowPay = false
    this.ShowTablero = false
  }
  ShowHistorial(){
    this.ShowHist = true
    this.ShowRegister = false
    this.ShowList = false
    this.ShowPay = false
    this.ShowTablero = false
  }
  ShowPays(){
    this.ShowPay = true
    this.ShowHist = false
    this.ShowList = false
    this.ShowRegister = false
    this.ShowTablero = false
  }
  ngOnInit(): void {
  }

}
