'use client'

import { useState, ReactElement } from 'react'

import TextQuestion from '@/components/TextQuestion'
import SingleQuestion from '@/components/SingleQuestion'
import MultipleQuestion from '@/components/MultipleQuestion'
import VideoQuestion from '@/components/VideoQuestion'
import PhotoQuestion from '@/components/PhotoQuestion'
import { Question, QuestionType } from '@/types/questions'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const components: Record<QuestionType, ReactElement> = {
    text: <TextQuestion />,
    single: <SingleQuestion />,
    multiple: <MultipleQuestion />,
    video: <VideoQuestion />,
    photo: <PhotoQuestion />,
}

type Props = {
    questions: Question[]
}

export default function List({ questions }: Props) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0) // eslint-disable-line @typescript-eslint/no-unused-vars
    const [answers, setAnswers] = useState<Record<number, string | string[]>>({}) // eslint-disable-line @typescript-eslint/no-unused-vars

    console.log(questions) // eslint-disable-line no-console

    return <p>ddf</p>
}
