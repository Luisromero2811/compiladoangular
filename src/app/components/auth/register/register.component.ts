import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  user: User;
  constructor(private fb:FormBuilder, private authservice:AuthService, private router:Router) {
    this.createFrom();
   }

  ngOnInit(): void {
  }
  register(): void {
    if (this.registerForm.invalid){
      return Object.values(this.registerForm.controls).forEach(control =>{
        control.markAsTouched();
      });
    }else{
      this.setUser();
      this.authservice.register(this.user).subscribe((data:any) => {
        timeMessage('Registrando', 1500).then(() => {
          successDialog('Registro Completado');
          this.router.navigate(['/login']);
      });
    }, error => {
          errorMessage('Ha ocurrido un error')
      });
    }
  }
  createFrom(): void{
    this.registerForm = this.fb.group({
      Nombre:['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      password2: ['',[Validators.required]]
    });
  }
  get emailValidate(){
    return (
       this.registerForm.get('email').invalid && this.registerForm.get('email').touched
    );
    
  }
  get passwordValidate(){
    return (
      this.registerForm.get('password').invalid && this.registerForm.get('password').touched
    );
  }
  get password2Validate(){
    const pass = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return pass === pass2 ? false : true;
  }
  setUser():void{
    this.user= {
      Nombre: this.registerForm.get('Nombre').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }
    console.log(this.user);
  }  
}

