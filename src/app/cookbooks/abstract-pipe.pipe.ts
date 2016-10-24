import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abstractPipe'
})
export class AbstractPipePipe implements PipeTransform {

  transform(value: any[], args: any[]): any {
    let queryString = args[0];
    let key = args[1];
    return queryString ? value.filter(item=>item[key].toLowerCase().indexOf(queryString.toLowerCase()) !== -1) : value;
  }

}
