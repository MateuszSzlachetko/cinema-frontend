import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReservePageComponent } from './ticket-reserve-page.component';

describe('TicketReservePageComponent', () => {
  let component: TicketReservePageComponent;
  let fixture: ComponentFixture<TicketReservePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketReservePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketReservePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
