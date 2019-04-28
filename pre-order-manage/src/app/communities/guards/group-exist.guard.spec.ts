import { TestBed, async, inject } from '@angular/core/testing';

import { GroupExistGuard } from './group-exist.guard';

describe('GroupExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupExistGuard]
    });
  });

  it('should ...', inject([GroupExistGuard], (guard: GroupExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
