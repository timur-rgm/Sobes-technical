import { useState, ChangeEvent } from 'react'

import { Button, Checkbox, FormControl, FormControlLabel, FormLabel } from '@mui/material'

import { Question, Answer } from '@/types/questions'

import styles from './MultipleQuestion.module.scss'

type Props = {
    onSubmit: (id: number, value: Answer) => void
    question: Question
}

export default function MultipleQuestion({ question, onSubmit }: Props) {
    const initialStateValue = question.options!.reduce((option, key) => ({ ...option, [key]: false }), {})

    const [value, setValue] = useState<Record<string, boolean>>(initialStateValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [event.target.name]: event.target.checked,
        })
    }

    const handleSubmit = () => {
        onSubmit(question.id, value)
    }

    return (
        <FormControl classes={{ root: styles.root }}>
            <FormLabel classes={{ root: styles.title, focused: styles.focused }} id="demo-controlled-radio-buttons-group">
                {question.title}
            </FormLabel>

            {question.options!.map((option) => (
                <FormControlLabel
                    key={option}
                    control={<Checkbox checked={value[option]} name={String(option)} onChange={handleChange} />}
                    label={option}
                />
            ))}

            <Button classes={{ root: styles.button }} onClick={handleSubmit} size="small" variant="contained">
                Следующий
            </Button>
        </FormControl>
    )
}
