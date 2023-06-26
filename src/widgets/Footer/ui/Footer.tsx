import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Footer.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;

    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <AppLink className={cls.link} href="/questions-answers">Вопросы-ответы</AppLink>
            <AppLink className={cls.link} href="/about">О нас</AppLink>
        </footer>
    );
});
