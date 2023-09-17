import { ChangeEvent, useState } from 'react'

import { FormControl, FormLabel, Button, TextField } from '@mui/material'

import { Question, Answer } from '@/types/questions'

import styles from './TextQuestion.module.scss'

type Props = {
    onSubmit: (id: number, value: Answer) => void
    question: Question
}

export default function TextQuestion({ question, onSubmit }: Props) {
    const [value, setValue] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsError(false)
        setValue((event.target as HTMLInputElement).value)
    }

    const isValueEmpty = String(value).trim().length === 0

    const handleSubmit = () => {
        if (isValueEmpty) {
            setIsError(true)

            return
        }

        onSubmit(question.id, value)
    }

    return (
        <FormControl classes={{ root: styles.root }}>
            <FormLabel classes={{ root: styles.title, focused: styles.focused }} id="demo-controlled-radio-buttons-group">
                {question.title}
            </FormLabel>

            <TextField error={isError} label="Имя фамилия" onChange={handleChange} size="small" />

            <Button onClick={handleSubmit} size="small" variant="contained">
                Следующий
            </Button>
        </FormControl>
    )
}
