import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    size?: ButtonSize;
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINED = 'outlined',
    CLEAR = 'clear'
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, children, theme = ButtonTheme.PRIMARY, size = ButtonSize.M, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[size], cls[theme]])}
            ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    );
});
