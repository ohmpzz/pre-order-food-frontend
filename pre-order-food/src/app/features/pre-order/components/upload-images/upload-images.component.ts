import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'preorder-upload-images',
  template: `
    <p>
      upload-images works!
    </p>
  `,
  styleUrls: ['./upload-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
