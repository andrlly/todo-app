import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '@app/todo/services/todo.service';
import { ITodo } from '@app/todo/interfaces/todo.interface';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public title = new FormControl('', [Validators.required]);
  public newTodos: ITodo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  public addTask(): void {
    if (this.title.value) {
      const todo: ITodo = {
        id: Math.random(),
        title: this.title.value,
        isCompleted: false,
      };

      this.newTodos.push(todo);
      this.todoService.addTodo(todo);
      // TODO: IN PROGRESS
      // this.todoService.addTodoAsync(this.newTodos);
      this.title.reset();
    }
  }

}
