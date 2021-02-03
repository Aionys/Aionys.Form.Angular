import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  template: '',
})
export abstract class AbstractComponent implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject();

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
