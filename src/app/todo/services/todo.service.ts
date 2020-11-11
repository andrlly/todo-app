import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { ITodo } from '@app/todo/interfaces/todo.interface';
import { LocalStorageService } from '@app/todo/services/local-storage.service';
import { storageKeys } from '@app/shared/for-storage/keys';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private localStorageService: LocalStorageService) {
    this.setTodos(this.localStorageService.get(storageKeys.todos));
  }

  private _todos: BehaviorSubject<ITodo[]> = new BehaviorSubject([]);
  public readonly todos$: Observable<ITodo[]> = this._todos.asObservable();

  private _isLoading: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public readonly isLoading$: Observable<string[]> = this._isLoading.asObservable();

  // TODO: IN PROGRESS (Tasks should be saved one by one in order they was added.) | Almost done =)
  // public addTodoAsync(todos: ITodo[]): void {
  //
  //   from(todos).pipe(
  //     concatMap((todo: ITodo) => this.addTodo(todo)),
  //   ).subscribe((res: ITodo) => {
  //       const _todos = this._todos.getValue();
  //       _todos.push(res);
  //       this.setTodos(_todos);
  //       this.setLoading(null, true);
  //   });
  // }
  //
  // public addTodo(todo: ITodo): Observable<ITodo> {
  //   const rand = Math.floor(Math.random() * (10000 - 5000)) + 5000;
  //   this.setLoading('load');
  //   return of(todo).pipe(
  //     delay(rand)
  //   );
  // }

  public setTodos(todos: ITodo[]): void {
    if (todos) {
      this._todos.next(todos);
    } else {
      todos = this._todos.getValue();
    }
    this._todos.next(todos);
    this.localStorageService.set(storageKeys.todos, todos);
  }

  public addTodo(todo: ITodo): void {
    const todos = this._todos.getValue();
    const rand = Math.floor(Math.random() * (10000 - 5000)) + 5000;
    this.setLoading('load');
    setTimeout(() => {
      todos.push(todo);
      this.setTodos(todos);
      this.setLoading(null, true);
    }, rand);
  }

  public removeTodo(todo: ITodo): void {
    const todos: ITodo[] = this._todos.getValue().filter((td: ITodo) => {
      return td.id !== todo.id;
    });
    this.setTodos(todos);
  }

  public completeTodo(todo: ITodo): void {
    const todoId = this._todos.getValue().findIndex(td => td.id === todo.id );
    const newTodos = [...this._todos.getValue()];
    newTodos[todoId] = {...newTodos[todoId], isCompleted: !newTodos[todoId].isCompleted };
    this.setTodos(newTodos);
  }

  private setLoading(value: string, remove?: boolean): void {
    const loaders = this._isLoading.getValue();
    let newValue;
    if (remove) {
      loaders.shift();
      newValue = loaders;
    } else {
      newValue = [...loaders, value];
    }
    this._isLoading.next(newValue);
  }

}
