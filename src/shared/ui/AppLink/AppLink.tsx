import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './AppLink.module.scss';
import Link from 'next/link';

interface AppLinkProps {
    className?: string;
    href: string;
    children: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const { className, href, children } = props;

    return (
        <Link href={href} className={classNames(cls.AppLink, {}, [className])}>
            {children}
        </Link>
    );
};
