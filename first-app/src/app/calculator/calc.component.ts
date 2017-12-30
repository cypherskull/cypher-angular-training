import { Component } from '@angular/core';
import { CalculatorModel } from './calc.model';


@Component({
	selector : 'app-calc',
	templateUrl : 'calc.component.html',
})
export class CalculatorOneComponent{
	model : CalculatorModel = new CalculatorModel();
}