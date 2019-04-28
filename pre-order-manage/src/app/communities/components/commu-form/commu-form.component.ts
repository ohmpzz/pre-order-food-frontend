import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Community } from '../../models/community.model';

@Component({
  selector: 'commu-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './commu-form.component.html',
  styleUrls: ['./commu-form.component.css'],
})
export class CommuFormComponent implements OnInit {
  exists = false;
  preview_cover: any = '';

  @Input()
  commu: Community;
  @Input()
  fileUrl: { url: string };

  @Output()
  create = new EventEmitter<Community>();
  @Output()
  file = new EventEmitter<File>();
  @Output()
  update = new EventEmitter<Community>();
  @Output()
  remove = new EventEmitter<Community>();

  form: FormGroup = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
    description: ['', Validators.maxLength(100)],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.commu && this.commu._id) {
      this.exists = true;
      this.preview_cover = this.commu.pictureUrl;
      this.form.patchValue(this.commu);
    }
  }

  detectUpload(event) {
    const file: File = event.target.files[0];
    const match = /^(image\/(jpg|jpeg|png))$/g;
    if (!match.test(file.type)) {
      return alert('image type not match');
    }
    this.previewCover(file);

    this.file.emit(file);
  }

  previewCover(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.preview_cover = reader.result;
    };
  }

  createCommunity(form: FormGroup) {
    const { valid, value } = form;
    if (!this.fileUrl || !this.fileUrl.url) {
      return alert('เลือกรูป');
    }
    if (valid) {
      return this.create.emit({ ...value, pictureUrl: this.fileUrl.url });
    }

    return alert('กรอกข้อมูลให้ครบ');
  }

  updateCommunity(form: FormGroup) {
    const { valid, value, touched } = form;
    if (touched && valid) {
      return this.update.emit({ ...this.commu, ...value });
    }

    return alert('กรอกข้อมูลให้ครบ');
  }

  removeCommunity(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.commu, ...value });
  }
}
