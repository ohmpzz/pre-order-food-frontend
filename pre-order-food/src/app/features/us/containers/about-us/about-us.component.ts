import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-about-us',
  template: `
    <p>
      about-us works!
    </p>
  `,
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
