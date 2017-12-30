import { Component, Output, EventEmitter } from "@angular/core";
import { IBug } from '../bugTrackerModel/bugTrackerModel';
import { BugStorageService } from '../services/bugStorage.service';


@Component({

    selector : 'bug-edit',
    template: `<section class="edit">
                <label for="">Bug Name :</label>
                <input type="text" [(ngModel)]="newBugName  "]>
                <input type="button" value="Create New" (click)="onCreateBugClick()">
                </section>`
})

export class BugEditComponent {
    newBugName : string = '';

    @Output()
    bugCreated : EventEmitter<IBug> = new EventEmitter<IBug>();

    constructor(private bugStorageService: BugStorageService) {
    //    this.bugs = this.bugStorageService.getListOfBugs();
    };

    onCreateBugClick() {
        let newBug : IBug = this.bugStorageService.addNew(this.newBugName);
        this.bugCreated.emit(newBug);
    }
}