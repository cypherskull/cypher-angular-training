import { IBug } from '../bugTrackerModel/bugTrackerModel';

export class BugOperationsService { 

    createNewBug(bugName : string, idNum : number) : IBug{
        let newBug: IBug = {
            id: idNum,
            name: bugName,
            isClosed: false,
            createdAt : new Date()
        };  
        return newBug;     
    
    }

    toggleBug(bugToToggle: IBug) :IBug {
        bugToToggle.isClosed = !bugToToggle.isClosed;
        return bugToToggle;
    }

}