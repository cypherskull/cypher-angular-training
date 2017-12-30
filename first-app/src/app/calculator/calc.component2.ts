import { Component } from '@angular/core';
import { CalculatorModel } from './calc.model';


@Component({
	selector : 'app-calc2',
	template : `
	<h3>Calculator - 2</h3>
	<hr>
	<input type="number" [(ngModel)]="model.n1">
	<select #operator>
		<option value="add">Add</option>
		<option value="subtract">Subtract</option>
		<option value="multiply">Multiply</option>
		<option value="divide">Divide</option>
	</select>
	<input type="number" [(ngModel)]="model.n2">
	<input type="button" value="Calculate" (click)=model[operator.value]()>
	<calc-result [data]="model.result"></calc-result>`
	//styleurls : ['calcstyle.css']
	
})

export class Calc2Component{
	model : CalculatorModel = new CalculatorModel();
}