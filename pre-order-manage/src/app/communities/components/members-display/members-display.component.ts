import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user.model';

@Component({
  selector: 'members-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './members-display.component.html',
  styleUrls: ['./members-display.component.css'],
})
export class MembersDisplayComponent implements OnInit {
  @Input() community$: Observable<User[]>;

  @Output() remove = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  removeMember(user: User) {
    this.remove.emit({ ...user });
  }
}
