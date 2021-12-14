import { TestBed } from '@angular/core/testing';

import { FavouriteGamesService } from './favourite-games.service';

describe('FavouriteGamesService', () => {
  let service: FavouriteGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
