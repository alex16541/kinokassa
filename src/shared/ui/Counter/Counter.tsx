'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import cls from './Counter.module.scss';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import MinusIcon from './../../assets/icons/minus';
import PlusIcon from './../../assets/icons/plus';

interface CounterProps {
    className?: string;
    value?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    maxValue?: number;
    minValue?: number;
}

export const Counter = memo((props: CounterProps) => {
    const {
        className,
        value: count = 0,
        onDecrement,
        onIncrement,
        maxValue = Number.MAX_SAFE_INTEGER,
        minValue = Number.MIN_SAFE_INTEGER,
    } = props;


    const onIncrementHandler = useCallback(() => {
        onIncrement?.();
    }, [onIncrement])

    const onDecrementHandler = useCallback(() => {
        onDecrement?.();
    }, [onDecrement])

    return (
        <div className={classNames(cls.Counter, {
        }, [className])}>
            <Button
                onClick={onDecrementHandler}
                className={cls.button}
                disabled={count === minValue}
                size={ButtonSize.S}
            ><MinusIcon /></Button>
            <span>{count}</span>
            <Button
                onClick={onIncrementHandler}
                className={cls.button}
                disabled={count === maxValue}
                size={ButtonSize.S}
            ><PlusIcon /></Button>
        </div>
    );
});
