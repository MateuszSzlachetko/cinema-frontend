import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningsPageComponent } from './screenings-page.component';

describe('ScreeningsPageComponent', () => {
  let component: ScreeningsPageComponent;
  let fixture: ComponentFixture<ScreeningsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreeningsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
