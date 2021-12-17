import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatedDialogComponent } from './user-updated-dialog.component';

describe('UserUpdatedDialogComponent', () => {
  let component: UserUpdatedDialogComponent;
  let fixture: ComponentFixture<UserUpdatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
