'use client'

import { useState, ReactElement } from 'react'

import Typography from '@mui/material/Typography'

import TextQuestion from '@/components/TextQuestion/TextQuestion'
import SingleQuestion from '@/components/SingleQuestion/SingleQuestion'
import MultipleQuestion from '@/components/MultipleQuestion/MultipleQuestion'
import VideoQuestion from '@/components/VideoQuestion'
import PhotoQuestion from '@/components/PhotoQuestion'
import { Question, QuestionType, Answer } from '@/types/questions'

import styles from './List.module.scss'

type Components = Record<
    QuestionType,
    ({ question, onSubmit }: { question: Question; onSubmit: () => void }) => ReactElement
>

const components: Components = {
    text: TextQuestion,
    single: SingleQuestion,
    multiple: MultipleQuestion,
    video: VideoQuestion,
    photo: PhotoQuestion,
}

type Props = {
    questions: Question[]
}

export default function List({ questions }: Props) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [answers, setAnswers] = useState<Record<number, Answer>>({})

    const currentQuestion = questions[currentQuestionIndex]
    const CurrentQuestion = components[currentQuestion.type]

    const handleNextButtonClick = (id: number, value: Answer) => {
        setCurrentQuestionIndex((prevState) => prevState + 1)
        setAnswers((prevState) => ({ ...prevState, [id]: value }))
    }

    console.log(questions) //eslint-disable-line no-console
    console.log(answers) // eslint-disable-line no-console

    return (
        <>
            <Typography classes={{ root: styles.title }} component="h1">
                Вопрос {currentQuestionIndex + 1} из {questions.length}
            </Typography>

            <CurrentQuestion onSubmit={handleNextButtonClick} question={currentQuestion} />
        </>
    )
}
