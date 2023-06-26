'use client'
import { selectTickets, selectTotalTicketCount } from '@/entity/cart';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { FilmList } from '@/widgets/FilmList';
import { memo } from 'react';
import cls from './CartPage.module.scss';


interface CartPageProps {
    className?: string;
}

const CartPage = memo((props: CartPageProps) => {
    const {className} = props;
    const tickets = useAppSelector(selectTickets);
    const totalTickets = useAppSelector(selectTotalTicketCount);

    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <div className={cls.films}>
                <FilmList films={tickets} withDelete/>
            </div>
            <Card className={cls.total}>
                <span>Итого билетов:</span>
                <span>{totalTickets}</span>
            </Card>
        </div>
    );
});

export default CartPage;