import Typography from '@mui/material/Typography'

import { Answer, Question } from '@/types/questions'

import styles from './VideoQuestion.module.scss'

type Props = {
    onSubmit: (id: number, value: Answer) => void
    question: Question
}

export default function VideoQuestion({ onSubmit, question }: Props) {
    return (
        <Typography
            component="h2"
            sx={{ marginBottom: '5px', fontSize: 16, fontWeight: '500', lineHeight: '22px', textAlign: 'center' }}
        >
            {question.title}
        </Typography>
    )
}
