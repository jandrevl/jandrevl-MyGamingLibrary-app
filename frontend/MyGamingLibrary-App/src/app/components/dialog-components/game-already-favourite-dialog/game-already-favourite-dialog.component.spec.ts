import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAlreadyFavouriteDialogComponent } from './game-already-favourite-dialog.component';

describe('GameAlreadyFavouriteDialogComponent', () => {
  let component: GameAlreadyFavouriteDialogComponent;
  let fixture: ComponentFixture<GameAlreadyFavouriteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAlreadyFavouriteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAlreadyFavouriteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
