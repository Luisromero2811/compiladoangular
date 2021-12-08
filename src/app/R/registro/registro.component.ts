import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  click(): void{
    timeMessage('Iniciando', 1500).then(() => {
      successDialog('Alumno Registrado').then(()=> {
        
      });
  
  });
  }
}


