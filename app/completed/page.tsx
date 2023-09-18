import { Typography } from '@mui/material'

import styles from './page.module.scss'

export default function Home() {
    return (
        <>
            <Typography classes={{ root: styles.title }} component="h1">
                Поздравляю
            </Typography>

            <Typography classes={{ root: styles.subtitle }} component="p">
                Вы прошли тестирование
            </Typography>
        </>
    )
}
