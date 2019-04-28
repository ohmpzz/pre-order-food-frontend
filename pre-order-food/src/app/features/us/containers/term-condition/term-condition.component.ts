import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-term-condition',
  template: `
    <p>
      term-condition works!
    </p>
  `,
  styleUrls: ['./term-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermConditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
