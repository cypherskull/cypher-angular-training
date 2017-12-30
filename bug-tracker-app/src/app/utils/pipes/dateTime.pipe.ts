import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dtpipe',
    pure: true
})
export class DateTimePipe implements PipeTransform {

    transform(dateTime: Date)  {
        //console.log(attr);
        return moment(dateTime).fromNow();
    }
}