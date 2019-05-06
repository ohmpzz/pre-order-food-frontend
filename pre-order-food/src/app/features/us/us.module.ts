import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

export const routes: Routes = [
  {
    path: 'about-us',
    component: fromContainers.AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: fromContainers.ContactUsComponent,
  },
  {
    path: 'faq',
    component: fromContainers.FaqComponent,
  },
  {
    path: 'how-to-use',
    component: fromContainers.HowToUseComponent,
  },
  {
    path: 'policy',
    component: fromContainers.PrivatePolicyComponent,
  },
  {
    path: 'term-and-condition',
    component: fromContainers.TermConditionComponent,
  },
];

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsModule {}
