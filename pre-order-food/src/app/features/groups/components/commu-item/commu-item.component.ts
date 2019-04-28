import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Group } from '../../models/group.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'group-commu-item',
  templateUrl: './commu-item.component.html',
  styleUrls: ['./commu-item.component.scss'],
})
export class CommuItemComponent implements OnInit {
  @Input() groups: Group[];
  constructor() {}

  ngOnInit() {}

  image(url) {
    return `url(${url})`;
  }
}
