import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletedDialogComponent } from './user-deleted-dialog.component';

describe('UserDeletedDialogComponent', () => {
  let component: UserDeletedDialogComponent;
  let fixture: ComponentFixture<UserDeletedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeletedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
