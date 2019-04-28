import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'checkoutTime',
})
export class CheckoutTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const checkoutTimeTH = moment(value)
      .locale('th')
      .format('llll');

    return checkoutTimeTH || null;
  }
}
