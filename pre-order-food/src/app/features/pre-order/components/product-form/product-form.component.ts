import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateProduct, imagesUrl } from '@app/core/models/product.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pre-order-product-form',
  template: `
    <form [formGroup]="form">
      <p>
        <mat-form-field
          appearance="outline"
          [floatLabel]="true"
          class="product_form_field"
        >
          <mat-label>ชื่อสินค้า*</mat-label>
          <input
            matInput
            type="text"
            formControlName="title"
            name="titleProduct"
          />
          <mat-error
            *ngIf="form.get('title').hasError"
            style="margin-top: 16px;"
          >
            กรุณาพิมพ์ชื่อสินค้า 5 ตัวอักษรขึ้นไป
          </mat-error>
        </mat-form-field>
      </p>
      <p>
        <mat-form-field
          appearance="outline"
          [floatLabel]="true"
          class="product_form_field"
        >
          <mat-label>รายละเอียด*</mat-label>
          <textarea
            matInput
            type="text"
            cdkTextareaAutosize
            formControlName="description"
            cdkAutosizeMinRows="4"
            cdkAutosizeMaxRows="6"
            name="description"
          ></textarea>
          <mat-error
            *ngIf="form.get('description').hasError"
            style="margin-top: 16px;"
          >
            กรุณาพิมพ์รายละเอียดสินค้า
          </mat-error>
        </mat-form-field>
      </p>
      <div class="form-group">
        <label>อัปโหลดรูปสินค้า</label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          class="form-control-file"
          multiple
          (change)="detectsUpload($event)"
        />
      </div>
      <div class="album">
        <img
          *ngFor="let i of previews$ | async"
          [src]="i"
          class="img-thumbnail"
        />
      </div>
      <div *ngIf="isUploading$ | async">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        กำลังอัปโหลด
      </div>
      <p>
        <button
          type="submit"
          class="btn btn-green-pine"
          (click)="createProduct(form)"
          [disabled]="form.invalid || (isUploading$ | async)"
        >
          เพิ่มสินค้า
        </button>
      </p>
    </form>
  `,
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Input() imagesPath$: Observable<string[]>;

  @Output() create = new EventEmitter<CreateProduct>();
  @Output() files = new EventEmitter<FileList>();

  isUploading$ = new BehaviorSubject(false);
  previews$ = new BehaviorSubject([]);
  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.imagesPath$.subscribe(res => {
      console.log(res);
      if (!!res.length) {
        this.isUploading$.next(false);
      }
    });
  }

  createProduct(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.imagesPath$.subscribe(res => {
        const imagesUrl = res.map(i => {
          return { url: i, title: value.title } as imagesUrl;
        });
        this.create.emit({ ...value, imagesUrl });
      });
    }
  }

  detectsUpload(e) {
    const files = e.target.files;
    const keys = Object.keys(files);
    for (let key of keys) {
      const match = /^(image\/(jpg|jpeg|png))$/g;
      const isMatch = match.test(files[key].type);
      if (!isMatch) {
        return alert('Image type not match');
      }
    }
    this.previewImages(files);

    this.isUploading$.next(true);
    this.files.emit(files);
  }

  previewImages(files: FileList) {
    let previews = [];
    Object.keys(files).map(k => {
      const reader = new FileReader();
      reader.readAsDataURL(files[k]);
      reader.onload = () => {
        previews = [...previews, reader.result];
        this.previews$.next(previews);
      };
    });
  }
}
