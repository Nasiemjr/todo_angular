import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

}

//An Observable is a collection of multiple input values that get processed using array methods such as map , reduce , filter , and so on. It comes in handy when handling asynchronous operations such as making HTTP requests, user-input events, and so on.