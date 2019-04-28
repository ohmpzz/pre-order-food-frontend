import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-how-to-use',
  template: `
    <p>
      how-to-use works!
    </p>
  `,
  styleUrls: ['./how-to-use.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowToUseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
