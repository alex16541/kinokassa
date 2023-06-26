'use client'
import { FilmCardActions } from '@/features/FilmCardActions';
import PhotoIcon from '@/shared/assets/icons/PhotoIcon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import Image from 'next/image';
import { memo } from 'react';
import { Film } from '../../model/types/Film';
import cls from './FilmDetails.module.scss';
import { Genres } from '@/features/GanreSelect';

interface FilmDetailsProps {
    className?: string;
    film: Film;
}

export const FilmDetails = memo((props: FilmDetailsProps) => {
    const { className, film } = props;

    return (
        <Card className={classNames(cls.FilmDetails, {}, [className])}>
            <div className={cls.img}>
                {
                    !!film.posterUrl ?
                        <Image
                            width={400}
                            height={500}
                            style={{objectFit: 'cover'}}
                            src={film.posterUrl}
                            alt={film.title}
                        /> :
                        <PhotoIcon className={cls.placeholder} />
                }
            </div>
            <div>
                <div className={cls.title}>
                    <h3>
                        {film.title}
                    </h3>
                    <FilmCardActions film={film}/>
                </div>
                <div className={cls.info}>
                    <p>
                        <b>Жанр: </b>
                        <span>{Genres[film.genre as keyof typeof Genres]}</span>
                    </p>
                    <p>
                        <b>Год выпуска: </b>
                        <span>{film.releaseYear}</span>
                    </p>
                    <p>
                        <b>Рейтинг: </b>
                        <span>{film.rating}</span>
                    </p>
                    <p>
                        <b>Режиссёр: </b>
                        <span>{film.director}</span>
                    </p>
                </div>
                <div className={cls.description}>
                    <h4 className={cls.header}>Описание</h4>
                    <p className={cls.text}>
                        {film.description}
                    </p>
                </div>
            </div>
        </Card>
    );
});
