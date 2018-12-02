import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { 
  }
  getPost(){
    return this.http.get(`${this.apiUrl}/posts`).pipe(map(result => result))
  }
}
