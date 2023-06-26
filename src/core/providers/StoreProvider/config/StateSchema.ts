import { CartSchema } from '@/entity/cart';
import { SearchPageSchema } from '@/pages/SearchPage/model/types/SearchPageSchema';

export interface StateSchema {
    searchPage: SearchPageSchema;
    cart: CartSchema;
}
