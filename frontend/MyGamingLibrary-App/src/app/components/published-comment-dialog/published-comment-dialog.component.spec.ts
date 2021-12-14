import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedCommentDialogComponent } from './published-comment-dialog.component';

describe('PublishedCommentDialogComponent', () => {
  let component: PublishedCommentDialogComponent;
  let fixture: ComponentFixture<PublishedCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedCommentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
