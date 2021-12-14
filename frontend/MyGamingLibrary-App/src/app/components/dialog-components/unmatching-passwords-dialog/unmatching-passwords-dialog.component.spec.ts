import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmatchingPasswordsDialogComponent } from './unmatching-passwords-dialog.component';

describe('UnmatchingPasswordsDialogComponent', () => {
  let component: UnmatchingPasswordsDialogComponent;
  let fixture: ComponentFixture<UnmatchingPasswordsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmatchingPasswordsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmatchingPasswordsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
