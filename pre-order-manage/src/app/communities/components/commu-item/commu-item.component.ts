import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Community } from '../../models/community.model';

@Component({
  selector: 'commu-item',
  templateUrl: './commu-item.component.html',
  styleUrls: ['./commu-item.component.css'],
})
export class CommuItemComponent implements OnInit {
  @Input() group: Community;

  @Output() editRoute = new EventEmitter<{ _id: string }>();
  @Output() viewRoute = new EventEmitter<{ _id: string }>();

  constructor(private sanitization: DomSanitizer) {}

  ngOnInit() {}

  trustUrl(url) {
    if (!url) {
      url =
        'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
    }
    return this.sanitization.bypassSecurityTrustStyle(`url('${url}')`);
  }

  editGroup(_id) {
    this.editRoute.emit({ _id });
  }

  viewGroup(_id) {
    this.viewRoute.emit({ _id });
  }
}
