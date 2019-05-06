import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
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

import { User } from '../../models/user.model';

@Component({
  selector: 'commu-add-member-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-member-modal.component.html',
  styleUrls: ['./add-member-modal.component.css'],
})
export class AddMemberModalComponent implements OnInit {
  @Input() users$: Observable<User[]>;

  @Output() create = new EventEmitter<User>();
  @Output() search = new EventEmitter();

  form: FormGroup = this.fb.group({
    search: '',
    phoneNumber: ['', Validators.required],
  });

  users: User[];

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {
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

  formatter = (x: User) => {
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
          return this.create.emit({
            ...currentUser,
            phoneNumber: this.form.get('phoneNumber').value,
          });
        }

        return alert('User not  found');
      });
  }
}
