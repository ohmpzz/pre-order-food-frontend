import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-contact-us',
  template: `
    <p>
      contact-us works!
    </p>
  `,
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
