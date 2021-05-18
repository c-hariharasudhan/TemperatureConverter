import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  tempGroup : FormGroup;
  constructor() {
  }

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32

    this.tempGroup = new FormGroup ({
      celsius: new FormControl(),
      fahrenheit: new FormControl()
    });
  }
  convertCelsius (){
    const f = this.tempGroup.get("fahrenheit").value;
    this.tempGroup.get('celsius').setValue(Number.isInteger(f) ? ((f - 32) * (5 /9)).toFixed(1) : "")
  }
  convertFahrenheit (){
    const c = this.tempGroup.get("celsius").value;
    this.tempGroup.get('fahrenheit').setValue(Number.isInteger(c) ? ((c * 9 / 5) + 32).toFixed(1) : "")
  }

}