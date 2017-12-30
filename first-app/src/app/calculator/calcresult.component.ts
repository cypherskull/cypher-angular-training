
import { Component, Input } from '@angular/core';

@Component({
    selector : 'calc-result',
    template : `<div [ngClass] ="{positive : data >= 0, negative : data < 0}">{{data}}</div>`,
    styleUrls : ['calcstyle.css']
})

export class CalcResultComponent {

    @Input()
    data : Number = 0;
}