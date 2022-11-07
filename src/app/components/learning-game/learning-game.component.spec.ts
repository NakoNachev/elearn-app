import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningGameComponent } from './learning-game.component';

describe('LearningGameComponent', () => {
  let component: LearningGameComponent;
  let fixture: ComponentFixture<LearningGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
