import { Genres } from '@/features/GanreSelect';
import PhotoIcon from '@/shared/assets/icons/PhotoIcon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card } from '@/shared/ui/Card/Card';
import Image from 'next/image';
import { ReactNode, memo } from 'react';
import { Film } from '../../model/types/Film';
import cls from './FilmCard.module.scss';

interface FilmCardProps {
    className?: string;
    film: Film;
    actionsElement?: ReactNode;
}

export const FilmCard = memo((props: FilmCardProps) => {
    const { className, film, actionsElement } = props;

    return (
        <Card className={classNames(cls.FilmCard, {}, [className])}>
            <div className={cls.img}>
                {
                    !!film?.posterUrl ?
                        <Image
                            width={100}
                            height={120}
                            style={{objectFit: 'cover'}}
                            src={film.posterUrl}
                            alt={film.title}
                        /> :
                        <PhotoIcon className={cls.placeholder} />
                }
            </div>
            <div className={cls.info}>
                <header>
                    <AppLink href={`/film/${film.id}`}>{film.title}</AppLink>
                    {actionsElement}
                </header>
                <i>{Genres[film.genre as keyof typeof Genres]}</i>
            </div>
        </Card>
    );
});
