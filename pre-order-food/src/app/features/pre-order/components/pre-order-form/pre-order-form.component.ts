import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pre-order-pre-order-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      pre-order-form works!
    </p>
  `,
  styleUrls: ['./pre-order-form.component.scss'],
})
export class PreOrderFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
