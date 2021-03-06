import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment.prod'
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiURL = environment.apiURL;
  constructor(private https:HttpClient) { }

  register(user: User):Observable<any>{
    return this.https.post(this.apiURL+'users',user);
  }
  login(user: User):Observable<any>{
    return this.https.post('https://adonis.fithealth.website/login', user);
  }
}
