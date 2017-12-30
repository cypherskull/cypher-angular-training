import { Component, Input } from "@angular/core";
import { IBug } from "../bugTrackerModel/bugTrackerModel"

@Component({
    selector : 'bug-stats',
    template : `<section class="stats">
                <span class="closed">{{bugs | closedcount}}</span>
                <span> / </span>
                <span>{{bugs.length}}</span>
                </section>`,
    styleUrls : ['../bugTrackerComp/bugTracker.css']
    
})

export class BugStatsComponent {
    @Input()
    bugs : IBug[] = [];

    /* getClosedBugCount(): number {
        return this.bugs.reduce((prevCnt, bug) => bug.isClosed ? ++prevCnt : prevCnt, 0);
    } */
}