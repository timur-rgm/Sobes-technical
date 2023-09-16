import Link from 'next/link'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export default function Home() {
    return (
        <>
            <Typography component="h1" sx={{ marginBottom: '5px', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                Тестирование
            </Typography>
            <Typography component="p" sx={{ marginBottom: '20px', fontSize: 16, textAlign: 'center' }}>
                Пройдите небольшое тестирование, состоящее из 5 вопросов
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Link href="/test">
                    <Button size="small" variant="contained">
                        Начать
                    </Button>
                </Link>
            </CardActions>
        </>
    )
}
