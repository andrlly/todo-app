import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TodoService } from '@app/todo/services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public translatesService: TranslateService,
    public todoService: TodoService
  ) {
  }

  public switchLang(lang: string): void {
    this.translatesService.use(lang);
  }
}
