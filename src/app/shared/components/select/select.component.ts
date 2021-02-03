import { Component, Input } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends AbstractFormFieldComponent {
  @Input() private _propValue?: string;
  @Input() private _propName?: string;

  @Input() selections = [];

  get propName(): string {
    return this._propName;
  }

  get propValue(): string {
    return this._propValue;
  }

  constructor() {
    super();
  }

  getValue(item: any, prop?: string): string {
    return prop ? item[prop] : item;
  }
}
