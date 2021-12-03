import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  user:User
  constructor(private fb:FormBuilder, private authservice:AuthService, private router:Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  login(): void{
    if (this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control =>{
        control.markAsTouched()
      });
    }else{
      this.setUser();
      this.authservice.login(this.user).subscribe((data:any) => {
        timeMessage('Iniciando', 1500).then(() => {
          successDialog('Iniciado').then(()=> {
            this.router.navigate(['/home']);
          });
          localStorage.setItem("username",data.username)
          localStorage.setItem("token",data.token)
      
      });
    }, error => {
          errorMessage('Usuario o contraseña incorrectos')
      });
    }
  }
  get emailValidate(){
    return (
      this.loginForm.get('email').invalid && this.loginForm.get('email').touched
    );
  }
  get passwordValidate(){
    return (
      this.loginForm.get('password').invalid && this.loginForm.get('password').touched
    );
  }

  createForm(): void{
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })
  }
  setUser():void{
    this.user= {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
  }
}

