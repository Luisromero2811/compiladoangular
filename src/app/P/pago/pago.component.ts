import { Component, OnInit } from '@angular/core';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  click(): void{
    timeMessage('Iniciando', 1500).then(() => {
      successDialog('Pago Registrado').then(()=> {
        
      });
  
  });
  }
}
