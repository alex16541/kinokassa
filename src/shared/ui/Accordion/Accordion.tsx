'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '../Card/Card';
import cls from './Accordion.module.scss';
import { ReactNode, useCallback, useState } from 'react';
import ArrowIcon from '@/shared/assets/icons/ArrowIcon';


interface AccordionProps {
    className?: string;
    title: string;
    children: ReactNode;
}

export const Accordion = (props: AccordionProps) => {
    const { className, title, children } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = useCallback(
        () => setIsOpen(curr => !curr),
        [setIsOpen]
    )
    return (
        <Card className={classNames(cls.Accordion, {[cls.open]: isOpen}, [className])}>
            <Button
                className={cls.header}
                theme={ButtonTheme.CLEAR}
                onClick={toggleIsOpen}
            >
                <h3 className={cls.title}>{title}</h3>
                <ArrowIcon className={cls.arrow}/>
            </Button>
            <div className={cls.content}>
                {children}
            </div>
        </Card>
    );
};
