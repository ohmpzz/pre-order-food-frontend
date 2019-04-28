import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';

import { AuthData } from '@app/core/models/auth.model';

import { Group } from '@app/core/models/group.model';

@Component({
  selector: 'group-add-member',
  template: `
    <ng-template #rt let-r="result" let-t="term">
      <img [src]="r.picture" class="mr-1" style="width: 16px" />
      <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
    </ng-template>

    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">เพิ่มสมาชิก</h4>
        <button
          type="button"
          class="close"
          aria-label="Close"
          (click)="modal.dismiss('Cross click')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form [formGroup]="form">
          <div class="form-group">
            <label for="search">ค้นหา</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name Or Email User"
              formControlName="search"
              [ngbTypeahead]="searchTerm"
              [resultTemplate]="rt"
              [inputFormatter]="formatter"
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">เบอร์โทรศัพท์</label>
            <input
              type="text"
              class="form-control"
              formControlName="phoneNumber"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="submit"
          class="btn btn-outline-dark"
          (click)="modal.close('Save click')"
        >
          เพิ่ม
        </button>
      </div>
    </ng-template>

    <button class="btn btn-green-pine" (click)="open(content)">
      เพิ่มสมาชิก
    </button>
  `,
  styleUrls: ['./add-member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMemberComponent implements OnInit {
  @Input() group: Group;
  @Input() users$: Observable<AuthData[]>;

  @Output() create = new EventEmitter<AuthData>();
  @Output() search = new EventEmitter();

  form: FormGroup = this.fb.group({
    search: '',
    phoneNumber: ['', Validators.required],
  });

  users: AuthData[];

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {
    console.log(this.group);
    this.users$.subscribe(res => {
      this.users = res;
    });
  }

  searchTerm = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(term => {
        this.search.emit(term);
      }),
      switchMap(() => {
        return this.users$.pipe(map(user => user));
      })
    );

  formatter = (x: AuthData) => {
    return x.name;
  };

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(() => {
        const currentUser = this.users.find(
          user => user == this.form.get('search').value
        );
        if (currentUser) {
          alert('เพิ่มสำเร็จ');
          console.log(this.form.get('phoneNumber').value);
          console.log(currentUser);
          return this.create.emit({
            ...currentUser,
            phoneNumber: this.form.get('phoneNumber').value,
          });
        }

        return alert('User not  found');
      });
  }
}
