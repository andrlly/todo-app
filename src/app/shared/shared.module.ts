import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '@sharedModule/pipes/search.pipe';
import { SortDirective } from '@sharedModule/directives/sort.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SearchPipe,
    SearchPipe,
    SortDirective,
    LoaderComponent,
  ],
    exports: [
        SearchPipe,
        SortDirective,
        LoaderComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
