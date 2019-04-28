import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'member-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  @Output() add = new EventEmitter();

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  addMember(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      return this.add.emit({ ...value });
    }

    return alert('กรอกข้อมูลให้ครบ');
  }
}
