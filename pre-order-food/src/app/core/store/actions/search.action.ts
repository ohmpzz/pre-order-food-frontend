import { Action } from '@ngrx/store';
import { AuthData } from '@app/core/models/auth.model';

export enum SearchActionTypes {
  Search = '[Core] Search',
  SearchFail = '[Core] Search Fail',
  SearchSuccess = '[Core] Search Success',
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
  constructor(public payload: AuthData[]) {}
}

export type SearchActions = Search | SearchFail | SearchSuccess;
