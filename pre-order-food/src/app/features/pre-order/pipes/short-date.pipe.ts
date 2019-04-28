import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'shortDate',
})
export class ShortDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      return moment(value)
        .locale('th')
        .format('L');
    }
    return null;
  }
}
