import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@sharedModule/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '@todoModule/components/todo-list/todo-list.component';
import { CreateTodoComponent } from '@todoModule/components/create-todo/create-todo.component';
import { HeaderComponent } from '@todoModule/components/header/header.component';
import { SortByComponent } from '@todoModule/components/todo-list/sort-by/sort-by.component';
import { SearchComponent } from '@todoModule/components/todo-list/search/search.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'create',
    component: CreateTodoComponent
  }
];

@NgModule({
  declarations: [
    TodoListComponent,
    CreateTodoComponent,
    HeaderComponent,
    SortByComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }


