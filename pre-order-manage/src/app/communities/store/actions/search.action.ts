import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum SearchActionTypes {
  Search = '[Product] Search',
  SearchFail = '[Product] Search Fail',
  SearchSuccess = '[Product] Search Success',
}

export class Search implements Action {
  readonly type = SearchActionTypes.Search;
  constructor(public payload: string) {}
}

export class SearchFail implements Action {
  readonly type = SearchActionTypes.SearchFail;
  constructor(public payload: any) {}
}

export class SearchSuccess implements Action {
  readonly type = SearchActionTypes.SearchSuccess;
  constructor(public payload: User[]) {}
}

export type SearchActions = Search | SearchFail | SearchSuccess;
