import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './FilmPage.module.scss';
import { FilmDetails } from '@/entity/film/ui/FilmDetails/FilmDetails';
import { CommentList } from '@/entity/comment'
import { useGetFilmByIdQuery, useGetReviewsByFilmIdQuery } from '@/shared/api/api';
import { Card } from '@/shared/ui/Card/Card';

interface FilmPageProps {
    className?: string;
    filmId: string;
}

const FilmPage = memo((props: FilmPageProps) => {
    const { className, filmId } = props;
    const { data: film, isLoading: filmLoading } = useGetFilmByIdQuery(filmId);
    const { data: comments, isLoading: commentsLoading } = useGetReviewsByFilmIdQuery(filmId);

    return (
        <div className={classNames(cls.FilmPage, {}, [className])}>
            {filmLoading && <Card>Загрузка информации о фильме...</Card>}
            {film && <FilmDetails film={film} />}
            {commentsLoading && <Card>Загрузка информации о фильме...</Card>}
            {comments && <CommentList comments={comments}/>}
        </div>
    );
});

export default FilmPage;