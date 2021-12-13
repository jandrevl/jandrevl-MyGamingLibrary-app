import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDuplicatedDialogComponent } from './user-duplicated-dialog.component';

describe('UserDuplicatedDialogComponent', () => {
  let component: UserDuplicatedDialogComponent;
  let fixture: ComponentFixture<UserDuplicatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDuplicatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDuplicatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
