import Link from 'next/link'
import { Typography, Button, CardActions } from '@mui/material'

import styles from './page.module.scss'

export default function Home() {
    return (
        <>
            <Typography classes={{ root: styles.title }} component="h1">
                Тестирование
            </Typography>

            <Typography classes={{ root: styles.subtitle }} component="p">
                Пройдите небольшое тестирование, состоящее из 5 вопросов
            </Typography>

            <CardActions classes={{ root: styles.buttonContainer }}>
                <Link href="/test">
                    <Button size="small" variant="contained">
                        Начать
                    </Button>
                </Link>
            </CardActions>
        </>
    )
}
