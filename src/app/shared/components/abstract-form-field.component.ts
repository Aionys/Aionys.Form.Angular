import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as EventEmitter from 'events';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { AbstractComponent } from './abstract.component';

@Component({
  template: '',
})
export abstract class AbstractFormFieldComponent
  extends AbstractComponent
  implements OnInit {
  @Input() control = new FormControl();
  @Input() fieldName = 'This Field';
  @Output() valueChange = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => this.valueChange.emit(value));
  }
}
