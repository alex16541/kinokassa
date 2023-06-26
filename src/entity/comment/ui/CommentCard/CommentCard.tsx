import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import PhotoIcon from '@/shared/assets/icons/PhotoIcon';
import Image from 'next/image';
import { comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment: comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment } = props;

    return (
        <Card className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.img}>
                {
                    !!comment.photo ?
                        <Image width={100} height={120} src={comment.photo} alt={comment.name} /> :
                        <PhotoIcon className={cls.placeholder} />
                }
            </div>
            <div className={cls.content}>
                <header>
                    <b>{comment.name}</b>
                    <span>Оценка: <b>{comment.rating}</b></span>
                </header>
                <p>{comment.text}</p>
            </div>
        </Card>
    );
});
