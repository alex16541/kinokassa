import { classNames } from '@/shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo } from 'react';
import cls from './TextInput.module.scss';
import { sfPro } from '@/core/fonts/fonts';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly'>

interface TextInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
}

export const TextInput = memo((props: TextInputProps) => {
    const {
        className,
        value,
        label,
        onChange,
        ...otherProps
    } = props;

    function onChangeHendler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(cls.TextInput, {}, [className, sfPro.className])}>
            {label && <label>{label}</label>}
            <input
                type="text"
                value={value}
                onChange={onChangeHendler}
                {...otherProps}
            />
        </div>
    );
});
