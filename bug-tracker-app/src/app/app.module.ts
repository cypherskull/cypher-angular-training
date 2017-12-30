import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTrackerComp/bugtComponent';
import { BugStatsComponent } from './bugTrackerViews/bugStatsComponent';
import { BugEditComponent} from './bugTrackerComp/bugedit.component';
import { BugOperationsService } from './services/bugOperations.service';
import { BugStorageService } from './services/bugStorage.service';
/* import { TrimTextPipe } from './pipes/trimtext.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DateTimePipe } from './pipes/dateTime.pipe'; */
import { ClosedCountPipe } from './pipes/closedCount.pipe';

import { FormsModule} from '@angular/forms';
import { UtilsModule } from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
