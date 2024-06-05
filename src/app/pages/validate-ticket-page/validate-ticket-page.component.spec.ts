import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTicketPageComponent } from './validate-ticket-page.component';

describe('ValidateTicketPageComponent', () => {
  let component: ValidateTicketPageComponent;
  let fixture: ComponentFixture<ValidateTicketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateTicketPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
