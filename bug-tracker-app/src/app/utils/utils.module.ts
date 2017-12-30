import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrimTextPipe } from './pipes/trimtext.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DateTimePipe } from './pipes/dateTime.pipe';
  
@NgModule({
    declarations : [
        TrimTextPipe,
        SortPipe,        
        DateTimePipe
    ],
    imports :[],
    exports :[
        TrimTextPipe,
        SortPipe,
        DateTimePipe
    ],
    providers : []
})

export class UtilsModule { }