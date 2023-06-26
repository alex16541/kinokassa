import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './GenreSelect.module.scss';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { GenresOptions } from '../model/types/genre';

interface GenreSelectProps {
    className?: string;
    value?: SelectOption;
    onChange?: (opt: SelectOption | undefined) => void;
}

export const GenreSelect = memo((props: GenreSelectProps) => {
    const {
        className,
        value,
        onChange
    } = props;

    return (
        <Select
            className={classNames(cls.GenreSelect, {}, [className])}
            options={GenresOptions}
            label='Жанр'
            placeholder='Выберите жанр'
            value={value}
            onChange={onChange}
        />
    );
});
