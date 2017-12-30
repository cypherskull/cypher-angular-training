import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator/calc.component';
import { Calc2Component } from './calculator/calc.component2';
import { CalcResultComponent } from './calculator/calcresult.component';


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneComponent,
    Calc2Component,
    CalcResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
