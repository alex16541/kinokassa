import { Film } from '@/entity/film';

export interface SearchPageSchema{
    films: Film[];
    _inited: boolean;
}