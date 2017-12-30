import { Component } from "@angular/core";
import { IBug } from "../bugTrackerModel/bugTrackerModel"
import { BugStorageService } from '../services/bugStorage.service';



@Component ({
    selector : 'app-bugt',
    templateUrl : 'bugtComponent.html',
    styleUrls : ['bugTracker.css']
    

})

export class BugTrackerComponent {   

    
    bugs: IBug[] = [];
    idNum: number = 0;
    sortBugBy: string = "name";

    constructor(private bugStorageService: BugStorageService) {
        this.bugs = this.bugStorageService.getListOfBugs();
    }

 
    onCreateNewClick(bugName : IBug) : void{            
               
        this.bugs = [...this.bugs, bugName];
        
    }
    onClickLi(closedBug : IBug) {

        let toggledBug = this.bugStorageService.toggle(closedBug);
        this.bugs = this.bugs.map(bug => bug === closedBug ? toggledBug : bug);
            
        };
    

    onClickRemove() {
        
        
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(bugToRemove => this.bugStorageService.remove(bugToRemove));

        this.bugs = this.bugs.filter(bug => !bug.isClosed);

    }

    /* getClosedBugCount() : number {
        return this.bugs.reduce((prevCnt, bug)=>bug.isClosed? ++prevCnt : prevCnt, 0);
    } */

    
}