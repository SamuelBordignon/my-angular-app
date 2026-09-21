import { Component } from '@angular/core';
import { Ticket, TicketPayload } from '../ticket/ticket.model';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []

  onSubmit(ticketPayload:TicketPayload){
    
  }
}
