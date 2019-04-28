import { AuthEffects } from './auth.effect';
import { GroupEffects } from './groups.effect';
import { PreOrderEffects } from './pre-order.effect';
import { ProductEffects } from './products.effect';
import { OrderEffects } from './orders.effect';
import { SearchEffects } from './search.effects';

export const effects: any[] = [
  AuthEffects,
  GroupEffects,
  PreOrderEffects,
  ProductEffects,
  OrderEffects,
  SearchEffects,
];

export * from './auth.effect';
export * from './groups.effect';
export * from './pre-order.effect';
export * from './products.effect';
export * from './orders.effect';
export * from './search.effects';
