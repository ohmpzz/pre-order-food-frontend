import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Group } from '@app/features/groups/models/group.model';

@Component({
  selector: 'pre-order-community-card',
  template: `
    <p>
      community-card works!
    </p>
  `,
  styleUrls: ['./community-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityCardComponent {
  @Input() community: Group;
}
