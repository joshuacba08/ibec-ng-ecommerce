import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/auth';


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  urlBase = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient){}

  login(data:LoginData){ //http://localhost:8080/api/v1/auth/login
    return this.httpClient.post(`${this.urlBase}/auth/login`, data) // devuelvo el observable
  }



}
