import { useState, ChangeEvent } from 'react'

import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'

import { Question, Answer } from '@/types/questions'

import styles from './SingleQuestion.module.scss'

type Props = {
    onButtonClick: (id: number, value: Answer) => void
    question: Question
}

export default function SingleQuestion({ question, onButtonClick }: Props) {
    const [value, setValue] = useState<number>(1)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number((event.target as HTMLInputElement).value))
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

            <Button
                classes={{ root: styles.button }}
                onClick={() => onButtonClick(question.id, value)}
                size="small"
                variant="contained"
            >
                Следующий
            </Button>
        </FormControl>
    )
}
