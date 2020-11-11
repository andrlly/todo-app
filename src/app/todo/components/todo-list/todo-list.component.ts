import { Component, OnInit } from '@angular/core';
import { ITodo } from '@app/todo/interfaces/todo.interface';
import { Observable } from 'rxjs';
import { TodoService } from '@app/todo/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }

  public completeTodo(todo: ITodo): void {
    this.todoService.completeTodo(todo);
  }

  public removeTodo(todo: ITodo): void {
    this.todoService.removeTodo(todo);
  }

}
