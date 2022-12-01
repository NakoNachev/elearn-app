import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationsCardComponent } from './explanations-card.component';

describe('ExplanationsCardComponent', () => {
  let component: ExplanationsCardComponent;
  let fixture: ComponentFixture<ExplanationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
