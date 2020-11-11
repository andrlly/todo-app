import { Component, Input } from '@angular/core';
import { ITodo } from '@todoModule/interfaces/todo.interface';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent {
  @Input() todos: ITodo[];

  public onSortToggle(event): void {
    const htmlEl: HTMLElement = event.target;
    htmlEl.classList.toggle('up');
  }

}
