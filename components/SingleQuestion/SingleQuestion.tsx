import { useState, ChangeEvent } from 'react'

import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'

import { Question, Answer } from '@/types/questions'

import styles from './SingleQuestion.module.scss'

type Props = {
    onSubmit: (id: number, value: Answer) => void
    question: Question
}

export default function SingleQuestion({ question, onSubmit }: Props) {
    const [value, setValue] = useState<number>(1)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number((event.target as HTMLInputElement).value))
    }

    const handleSubmit = () => {
        onSubmit(question.id, value)
    }

    return (
        <FormControl classes={{ root: styles.root }}>
            <FormLabel classes={{ root: styles.title, focused: styles.focused }} id="demo-controlled-radio-buttons-group">
                {question.title}
            </FormLabel>

            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
                value={value}
            >
                {question.options!.map((option) => (
                    <FormControlLabel key={option} control={<Radio />} label={option} value={option} />
                ))}
            </RadioGroup>

            <Button classes={{ root: styles.button }} onClick={handleSubmit} size="small" variant="contained">
                Следующий
            </Button>
        </FormControl>
    )
}
