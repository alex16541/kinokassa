import { Film } from '@/entity/film';
export interface Ticket extends Film{
    count: number;
}

export interface CartSchema {
    tickets: Ticket[]
}