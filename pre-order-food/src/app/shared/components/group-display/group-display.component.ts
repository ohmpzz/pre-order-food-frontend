import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Group } from '@app/features/groups/models/group.model';

@Component({
  selector: 'shared-group-display',
  template: `
    <div *ngIf="group as i" class="card box-shadow">
      <img
        class="card-img-top card_img"
        [src]="i.pictureUrl"
        [alt]="i.title + i.description"
        [title]="i.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ i.title | titlecase }}</h5>
        <p class="card-text">
          {{ i.description }}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./group-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDisplayComponent {
  @Input() group: Group;
}
