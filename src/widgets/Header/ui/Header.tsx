'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Header.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import CartIcon from '@/shared/assets/icons/CartIcon';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectTotalTicketCount } from '@/entity/cart';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;
    const ticketCount = useAppSelector(selectTotalTicketCount);

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppLink href="/" className={cls.logo}>Билетопоиск</AppLink>
            <AppLink href='/cart' className={cls.cart}>
                {ticketCount !== 0 && <span>{ticketCount}</span>}
                <CartIcon />
            </AppLink>
        </header>
    );
});
