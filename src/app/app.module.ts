import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '@app/app.component';
import { TodoModule } from '@todoModule/todo.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const appRoutes: Routes = [
  { path: '', loadChildren: () => import('@todoModule/todo.module').then(m => m.TodoModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}


