'use client'
import { Film } from '@/entity/film';
import { useGetFilmsByCinemaQuery } from '@/shared/api/api';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { memo, useEffect, useState } from 'react';
import { Filter, SearchPageFilters } from './../SearchPageFilters/SearchPageFilters';
import cls from './SearchPage.module.scss';
import { FilmList } from '@/widgets/FilmList';

interface SearchPageProps {
    className?: string;
}

const SearchPage = memo((props: SearchPageProps) => {
    const { className } = props;
    const [cinemaId, setCinemaId] = useState<string>();
    const { data, isLoading, isFetching } = useGetFilmsByCinemaQuery(cinemaId);
    const [films, setFilms] = useState(data);
    const [filter, setFilter] = useState<Filter>();

    const sortFilms = (filter: Filter) => {

        setCinemaId(filter?.selectedCinema?.value)

        let sortedFilms: Film[] = data ?? [];

        if(filter?.filmName){
            const name = filter.filmName;
            sortedFilms = sortedFilms?.filter((f) => f.title.toLowerCase().indexOf(name.toLowerCase()) !== -1) ?? [];
        }
        if(filter?.selectedGenre){
            const genre = filter.selectedGenre.value;

            sortedFilms = sortedFilms.filter((f) => f.genre === genre) ?? [];
        }
        setFilms(sortedFilms);
    }

    const onChangeFilter = (filter: Filter) => {
        setFilter(filter);
        sortFilms(filter);
    };

    useEffect(() => {
        setFilms(data);
        filter ? sortFilms(filter) : null;
    }, [data])

    return (
        <main className={classNames(cls.SearchPage, {}, [className])}>
            <SearchPageFilters className={cls.sidebar} onChange={onChangeFilter}/>
            <div className={cls.content}>
                {isLoading && <Card className={cls.loader}>Загрузка списка фильмов...</Card>}
                {isFetching && !isLoading && <Card className={cls.loader}>Поиск по кинотеатру...</Card>}
                {films && <FilmList className={cls.films} films={films}/>}
            </div>
        </main>
    );
});

export default SearchPage;