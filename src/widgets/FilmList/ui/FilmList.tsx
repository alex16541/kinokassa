import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './FilmList.module.scss';
import { FilmCard, Film } from '@/entity/film';
import { FilmCardActions } from '@/features/FilmCardActions';

interface FilmListProps {
    className?: string;
    films: Film[];
    withDelete?: boolean;
}

export const FilmList = memo((props: FilmListProps) => {
    const { className, films, withDelete = false } = props;

    const actions = (film: Film) => <FilmCardActions film={film} withDelete={withDelete}/>

    return (
        <div className={classNames(cls.FilmList, {}, [className])}>
            {films.map((film) => (
                <FilmCard key={film.id} film={film} actionsElement={actions(film)} />
            ))}
        </div>
    );
});
