import { IBug } from "../bugTrackerModel/bugTrackerModel";
import { BugOperationsService } from "./bugOperations.service";
import { Injectable } from "@angular/core";


@Injectable()
export class BugStorageService {
    private storage = window.localStorage;
    private currentBugId = 0;


    constructor(private bugOperations : BugOperationsService) {
        
    }
    

    getListOfBugs() : IBug[] {        
        //console.log("here i am");    
        let result : IBug[] = [];
        
            for (let i = 0, count = this.storage.length; i < count; i++) {
                //console.log(i);                
                let jsn = this.storage.getItem(this.storage.key(i));                 
                let bug = JSON.parse(jsn);
                this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
                result.push(bug);
            }
            return result;
        
    }
    private save(bug: IBug): IBug {
        this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
        return bug;
    }
    addNew(bugName: string): IBug {
        let newBug = this.bugOperations.createNewBug(bugName, ++this.currentBugId);
        return this.save(newBug);
    }
    toggle(bugToToggle: IBug): IBug {
        let toggledBug = this.bugOperations.toggleBug(bugToToggle);
        return this.save(toggledBug);
    }
    remove(bug: IBug): void {
        this.storage.removeItem(bug.id.toString());
    }
    
}