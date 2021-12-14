import { TestBed } from '@angular/core/testing';

import { GameDetailsAuxService } from './game-details-aux.service';

describe('GameDetailsAuxService', () => {
  let service: GameDetailsAuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDetailsAuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
