import { Pipe, PipeTransform } from "@angular/core";
import { IBug } from "../bugTrackerModel/bugTrackerModel";

@Pipe({
    name : 'closedcount',
    pure : true
})

export class ClosedCountPipe implements PipeTransform {
    transform(bugs : IBug[]) : number{        
            return bugs.reduce((prevCnt, bug) => bug.isClosed ? ++prevCnt : prevCnt, 0);
        }
    }
