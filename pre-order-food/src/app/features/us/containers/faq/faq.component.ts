import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-faq',
  template: `
    <p>
      faq works!
    </p>
  `,
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
