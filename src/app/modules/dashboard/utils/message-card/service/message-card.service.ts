import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Internship} from '../../../../../shared/model/Internship';
import {Skill} from '../../../../../shared/model/Skill';

@Injectable({
  providedIn: 'root'
})
export class MessageCardService {
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api
  private httpClient: HttpClient;
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

}
