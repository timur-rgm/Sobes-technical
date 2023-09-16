import Typography from '@mui/material/Typography'

import { Question } from '@/types/questions'

type Props = {
    question: Question
}

export default function VideoQuestion({ question }: Props) {
    return (
        <Typography
            component="h2"
            sx={{ marginBottom: '5px', fontSize: 16, fontWeight: '500', lineHeight: '22px', textAlign: 'center' }}
        >
            {question.title}
        </Typography>
    )
}
