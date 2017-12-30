import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortpipe',
    pure: true
})
export class SortPipe implements PipeTransform {

    private getComparer(attrName) {        
        return function (e1,e2) {
            if(e1[attrName] > e2[attrName]) return 1;
            if (e1[attrName] < e2[attrName]) return -1;
            return 0;
            
        }
    }
    transform(bugs: any[], attr: string): any[] {
        //console.log(attr);
        bugs.sort(this.getComparer(attr));
        return bugs;
    }
}