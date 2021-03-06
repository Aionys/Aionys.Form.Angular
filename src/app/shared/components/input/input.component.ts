import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { TextMask } from '../../models/text-mask.model';
import { ValidatorPatterns } from '../../utils/validator-patterns.util';
import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent
  extends AbstractFormFieldComponent
  implements OnChanges {
  @Input() isDatepicker = false;
  @Input() isPhoneNumber = false;

  private phoneNumberMask: TextMask = {
    mask: ValidatorPatterns.phoneMask,
  };

  public currentTextMask: TextMask = {
    mask: false,
  };

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isPhoneNumber = changes.isPhoneNumber?.currentValue;

    if (isPhoneNumber) {
      this.currentTextMask = this.phoneNumberMask;
    }
  }
}
