import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-private-policy',
  template: `
    <p>
      private-policy works!
    </p>
  `,
  styleUrls: ['./private-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivatePolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
