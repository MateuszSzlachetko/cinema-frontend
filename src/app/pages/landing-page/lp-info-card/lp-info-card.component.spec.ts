import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpInfoCardComponent } from './lp-info-card.component';

describe('LpInfoCardComponent', () => {
  let component: LpInfoCardComponent;
  let fixture: ComponentFixture<LpInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
