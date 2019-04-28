import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Community } from '../../models/community';

const COMMUNITIES_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CommunitiesComponent),
  multi: true,
};

@Component({
  selector: 'pre-order-communities',
  providers: [COMMUNITIES_ACCESSOR],
  template: `
    <div class="row">
      <div *ngFor="let i of (communities | slice: 0:3)" class="col-md-4">
        <div
          class="card box-shadow check"
          (click)="selectCommunity(i._id)"
          [class.active]="existsInCommunities(i._id)"
        >
          <img
            class="card-img-top card_img"
            [src]="i.pictureUrl"
            [alt]="i.name"
          />
          <div class="card-body">
            <h5 class="card-title" style="font: 14px">
              {{ i.name | titlecase }}
            </h5>
            <p class="card-text">
              {{ i.description }}
            </p>
          </div>
        </div>
      </div>

      <div
        id="communityCollapsed"
        [ngbCollapse]="isCollapsed"
        *ngFor="let i of (communities | slice: 3)"
        class="col-md-4"
      >
        <div
          class="card box-shadow check"
          (click)="selectCommunity(i._id)"
          [class.active]="existsInCommunities(i._id)"
        >
          <img
            class="card-img-top card_img"
            [src]="i.imagesUrl[0].url"
            [alt]="i.imagesUrl[0].title"
          />
          <div class="card-body">
            <h5 class="card-title" style="font: 14px">
              {{ i.name | titlecase }}
            </h5>
            <p class="card-text">
              {{ i.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <p>
      <button
        type="button"
        class="btn btn-outline-primary"
        (click)="isCollapsed = !isCollapsed"
        [attr.aria-expanded]="!isCollapsed"
        aria-controls="communityCollapsed"
      >
        {{ isCollapsed ? 'ดูทั้งหมด' : 'ปิด' }}
      </button>
    </p>
  `,
  styleUrls: ['./communities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitiesComponent implements ControlValueAccessor {
  @Input() communities: Community[] = [];

  isCollapsed: boolean = true;
  value: string[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: string[]) {
    this.value = value;
  }

  selectCommunity(communityId: string) {
    if (this.existsInCommunities(communityId)) {
      this.value = this.value.filter(item => item !== communityId);
    } else {
      this.value = [...this.value, communityId];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInCommunities(communityId: string) {
    return this.value.some(val => val === communityId);
  }
}
