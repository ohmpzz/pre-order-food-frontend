import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'commu-cover-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cover-preview.component.html',
  styleUrls: ['./cover-preview.component.css'],
})
export class CoverPreviewComponent implements OnInit {
  @Input() coverUrl: string;
  constructor() {}

  ngOnInit() {}
}
