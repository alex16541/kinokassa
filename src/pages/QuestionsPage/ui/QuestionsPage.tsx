import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './QuestionsPage.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Accordion } from './../../../shared/ui/Accordion/Accordion';

interface QuestionsPageProps {
    className?: string;
}

const QuestionsPage = memo((props: QuestionsPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.QuestionsPage, {}, [className])}>
            <Card className={cls.header}><h1 className={cls.title}>Вопросы-ответы</h1></Card>
            <div className={cls.questions}>
                <Accordion title='Что такое Билетопоиск?'>
                    <p>
                        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
                        купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить
                        фильмам оценки, написать рецензии и дополнить описание фильмов.
                    </p>
                </Accordion>
                <Accordion title='Какой компании принадлежит Билетопоиск?'>
                    <p>
                        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
                        купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить
                        фильмам оценки, написать рецензии и дополнить описание фильмов.
                    </p>
                </Accordion>
                <Accordion title='Как купить билет на Билетопоиск?'>
                    <p>
                        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
                        купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить
                        фильмам оценки, написать рецензии и дополнить описание фильмов.
                    </p>
                </Accordion>
                <Accordion title='Как оставить отзыв на Билетопоиск?'>
                    <p>
                        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
                        купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить
                        фильмам оценки, написать рецензии и дополнить описание фильмов.
                    </p>
                </Accordion>
            </div>
        </div>
    );
});

export default QuestionsPage;