'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cls from './Select.module.scss';
import { sfPro } from '@/core/fonts/fonts';
import { Button, ButtonTheme } from '../Button/Button';
import ArrowIcon from '@/shared/assets/icons/ArrowIcon';
import { Portal } from '../Portal';

export interface SelectOption {
    value: any;
    text: string;
}
interface SelectProps {
    className?: string;
    placeholder?: string;
    options?: SelectOption[];
    value?: SelectOption;
    label?: string;
    onChange?: (opt: SelectOption | undefined) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label = '',
        placeholder = '',
        options = [],
        value,
        onChange
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const portalElement = document.querySelector<HTMLElement>('.selectContainer') ?? undefined;
    const buttonRef: any = useRef();
    const [overlayStyles, setOverlayStyles] = useState({});

    useEffect(() => {
        if(buttonRef.current){
            setOverlayStyles({
                width: buttonRef.current?.offsetWidth,
                top: buttonRef.current?.offsetTop + buttonRef.current?.offsetHeight + 10,
                left: buttonRef.current?.offsetLeft,
            })
        }
    }, [buttonRef.current])

    const content = value ?
        (
            <div className={cls.value}>
                {value.text}
            </div>
        ) : (
            <div className={cls.placeholder}>
                {placeholder}
            </div>
        )

    const onOptionClick = useCallback((option?: SelectOption) => {
        onChange?.(option);
        setIsFocused(false);
    }, [setIsFocused, onChange, value, isFocused])

    const optionElements = useMemo(() =>{

        const elements = options.map((opt) => (
            <Button
                key={opt.text}
                className={cls.option}
                onClick={() => onOptionClick(opt)}
                theme={ButtonTheme.CLEAR}
            >
                {opt.text}
            </Button>
        ))

        elements.unshift((
            <Button
                key={null}
                className={cls.option}
                onClick={() => onOptionClick()}
                theme={ButtonTheme.CLEAR}
            >
                Не выбрано
            </Button>
        ))

        return elements;
    }
    , [options, onOptionClick]
    )

    return (
        <div className={classNames(cls.Select, {}, [className, sfPro.className])}>
            {label && <label>{label}</label>}
            <Button
                className={cls.button}
                theme={ButtonTheme.CLEAR}
                ref={buttonRef}
                onClick={() => setIsFocused(v => !v)}
            >
                <div className={cls.content}>
                    {content}
                </div>
                <ArrowIcon className={cls.arrow}/>
            </Button>
            {isFocused && (
                <Portal element={portalElement}>
                    <div className={cls.overlay} style={overlayStyles}>
                        {optionElements}
                    </div>
                </Portal>
            )
            }
        </div>
    );
});
