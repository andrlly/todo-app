import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, fieldName?: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter( it => it[fieldName].toLowerCase().includes(searchText.toLowerCase()));
  }
}
