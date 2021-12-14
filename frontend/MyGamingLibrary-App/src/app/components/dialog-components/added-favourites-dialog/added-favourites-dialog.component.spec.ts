import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedFavouritesDialogComponent } from './added-favourites-dialog.component';

describe('AddedFavouritesDialogComponent', () => {
  let component: AddedFavouritesDialogComponent;
  let fixture: ComponentFixture<AddedFavouritesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedFavouritesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedFavouritesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
