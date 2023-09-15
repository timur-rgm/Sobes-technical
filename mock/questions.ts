import { Question } from '@/types/questions'

export const questions: Question[] = [
    {
        id: 1,
        type: 'text',
        title: 'Как вас зовут?',
    },
    {
        id: 2,
        type: 'radio',
        title: 'Сколько у вас лет опыта во frontend-разработке?',
        options: [1, 2, 3, 4, 5],
    },
    {
        id: 3,
        type: 'check',
        title: 'Выберите технологии, которыми вы владеете:',
        options: ['React', 'Typescript', 'Redux', 'MobX', 'Next'],
    },
    {
        id: 4,
        type: 'video',
        title: 'Запишите небольшое видео о самой сложной задаче, с которой вы сталкивались, и том, как вы ее решили',
    },
    {
        id: 5,
        type: 'video',
        title: 'Загрузите ваше фото',
    },
]
