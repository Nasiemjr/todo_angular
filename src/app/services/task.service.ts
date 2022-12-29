import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

}

//An Observable is a collection of multiple input values that get processed using array methods such as map , reduce , filter , and so on. It comes in handy when handling asynchronous operations such as making HTTP requests, user-input events, and so on.