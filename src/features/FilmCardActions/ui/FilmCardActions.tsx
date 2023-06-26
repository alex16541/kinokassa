import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import cls from './FilmCardActions.module.scss';
import { Counter } from '@/shared/ui/Counter/Counter';
import CloseIcon from '@/shared/assets/icons/CloseIcon';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { FilmDeleteModal } from '@/entity/film/ui/FilmDeleteModal/FilmDeleteModal';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Film } from '@/entity/film';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { CartActions, selectTicket } from '@/entity/cart';

interface FilmCardActionsProps {
    className?: string;
    withDelete?: boolean;
    film: Film;
}

export const FilmCardActions = memo((props: FilmCardActionsProps) => {
    const { className, withDelete = false, film } = props;
    const dispatch = useAppDispatch();
    const ticket = useAppSelector(selectTicket(film.id));
    const [isOpen, setIsOpen] = useState(false);

    const onDecrement = useCallback(() => {
        if(withDelete && ticket?.count === 1){
            setIsOpen(true);
        } else {
            dispatch(CartActions.deleteTicket(film))
        }
    }, [withDelete, ticket?.count]);
    const onIncrement = useCallback(() => dispatch(CartActions.addTicket(film)), []);
    const onOpenModal = useCallback(() => setIsOpen(true), []);
    const onDeleteTicket = useCallback(() => {
        dispatch(CartActions.deleteAllTicketsByFilmId(film.id))
        setIsOpen(false);
    }, [ setIsOpen]);
    const onCancelDelete = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <div className={classNames(cls.FilmCardActions, {}, [className])}>
            <Counter
                value={ticket?.count}
                minValue={0}
                maxValue={30}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
            />
            {
                withDelete && (
                    <>
                        <Button
                            className={cls.delete}
                            theme={ButtonTheme.CLEAR}
                            onClick={onOpenModal}
                        >
                            <CloseIcon />
                        </Button>
                        <FilmDeleteModal
                            isOpen={isOpen}
                            onSuccess={onDeleteTicket}
                            onClose={onCancelDelete}
                        />
                    </>
                )
            }
        </div>
    );
});
