import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customId'
})
export class CustomIdPipe implements PipeTransform {

  transform(id: number, title: string, date: string): any {
    return title.toLowerCase() + '-' + id + '-' + date;
  }

}
