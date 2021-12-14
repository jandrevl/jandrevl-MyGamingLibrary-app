import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenUserDialogComponent } from './frozen-user-dialog.component';

describe('FrozenUserDialogComponent', () => {
  let component: FrozenUserDialogComponent;
  let fixture: ComponentFixture<FrozenUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
