import { StateSchema } from '@/core/providers/StoreProvider';

export const selectTickets = (state: StateSchema) => state.cart.tickets;

export const selectTotalTicketCount = (state: StateSchema) =>
    state.cart.tickets.reduce((count, ticket) => count + ticket.count, 0);

export const selectTicket = (filmId: string) => (state: StateSchema) =>
    state.cart.tickets.find((t) => t.id === filmId)