'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo, useState } from 'react';
import cls from './SearchPageFilters.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { TextInput } from '@/shared/ui/TextInput/TextInput';
import { GenreSelect } from '@/features/GanreSelect';
import { SelectOption, Select } from '@/shared/ui/Select/Select';
import { useGetCinemasQuery } from '@/shared/api/api';

interface SearchPageFiltersProps {
    className?: string;
    onChange?: (filter: Filter) => void;
}

export interface Filter{
    selectedGenre?: SelectOption,
    selectedCinema?: SelectOption,
    filmName?: string,
}

export const SearchPageFilters = memo((props: SearchPageFiltersProps) => {
    const { className, onChange } = props;
    const { data: cinemas, isLoading } = useGetCinemasQuery();
    const [filter, setFilter] = useState<Filter>({});
    const onChangeHandler = useCallback((newFilter: Filter) => {
        const newValue = {...filter, ...newFilter};

        setFilter(newValue);
        onChange?.(newValue);

    }, [onChange, setFilter, filter])

    const cinemasOptions = useMemo(() => {
        return cinemas?.map((c) => ({value: c.id, text: c.name})) ?? [];
    }, [cinemas]);
    return (
        <Card className={classNames(cls.SearchPageFilters, {}, [className])}>
            <h3>Фильтр поиска</h3>
            <div className={cls.filters}>
                <TextInput
                    onChange={(name) => onChangeHandler({filmName: name}) }
                    label='Название'
                    placeholder='Введите название'
                />
                <GenreSelect
                    value={filter.selectedGenre}
                    onChange={(opt: SelectOption) => onChangeHandler({selectedGenre: opt})}
                />
                {
                    !isLoading ?
                        <Select
                            options={cinemasOptions}
                            label='Кинотеатр'
                            placeholder='Выберите кинотеатр'
                            value={filter.selectedCinema}
                            onChange={(cinema) => onChangeHandler({selectedCinema: cinema}) }
                        />
                        :  <p>Загрузка кинотеатров...</p>
                }
            </div>
        </Card>
    );
});
