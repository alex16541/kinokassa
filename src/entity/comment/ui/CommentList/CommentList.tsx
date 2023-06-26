import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentList.module.scss';
import { CommentCard } from './../CommentCard/CommentCard';
import { comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments: comment[];
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        </div>
    );
});
