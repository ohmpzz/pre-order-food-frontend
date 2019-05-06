import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthData } from '@app/core/models/auth.model';
import { Group } from '@app/core/models/group.model';

@Component({
  selector: 'group-members',
  template: `
    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="member">สมาชิก</h4>
        <button
          type="button"
          class="close"
          aria-label="Close"
          (click)="modal.dismiss('Cross click')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body" style="overflow-x: auto; max-height: 550px">
        <div *ngFor="let i of group?.members">
          <div class="row">
            <div class="col-2 user">
              <img [src]="i.picture" class="user_img" alt="" />
            </div>
            <div class="col-10" style="padding-left:0">
              <p>
                {{ i.name }}
                <span style="cursor: pointer" (click)="removeMember(i)"
                  >&times;</span
                >
              </p>
            </div>
          </div>
        </div>

        <div *ngIf="!group?.members.length">
          <p>ไม่มีสมาชิก</p>
        </div>
      </div>
    </ng-template>

    <span (click)="open(content)">สมาชิก</span>
  `,
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent implements OnInit {
  @Input() group: Group;
  @Input() user: AuthData;

  @Output() remove = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'member' });
  }

  removeMember(user) {}
}
