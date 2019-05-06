import { GroupEffects } from './group.effects';
import { SearchEffects } from './search.effects';
import { UploadEffects } from './upload.effects';
import { AuthEffects } from './auth.effects';

export const effects: any[] = [
  GroupEffects,
  SearchEffects,
  UploadEffects,
  AuthEffects,
];

export * from './auth.effects';
export * from './group.effects';
export * from './search.effects';
export * from './upload.effects';
