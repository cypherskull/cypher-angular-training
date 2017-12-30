
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'trimtext'
})
export class TrimTextPipe implements PipeTransform {
    
    transform(text : string) : string {
        return (text.length >=30 ? text.substring(0,30) + "..." : text);
    }
}