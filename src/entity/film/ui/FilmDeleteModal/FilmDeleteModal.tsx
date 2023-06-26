'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './FilmDeleteModal.module.scss';
import CloseIcon from '@/shared/assets/icons/CloseIcon';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal';

interface FilmDeleteModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    onSuccess?: () => void;
}

export const FilmDeleteModal = memo((props: FilmDeleteModalProps) => {
    const { className, isOpen, onClose, onSuccess} = props;

    return (
        <Modal
            className={classNames(cls.FilmDeleteModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={cls.modal}>
                <header>
                    <b>Удаление билета</b>
                    <Button
                        className={cls.close}
                        onClick={onClose}
                        theme={ButtonTheme.CLEAR}
                    ><CloseIcon /></Button>
                </header>
                <p>Вы уверены, что хотите удалить билет?</p>
                <div className={cls.actions}>
                    <Button onClick={onSuccess}>Да</Button>
                    <Button onClick={onClose} theme={ButtonTheme.OUTLINED}>Нет</Button>
                </div>
            </div>
        </Modal>
    );
});
