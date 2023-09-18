import { ReactNode } from 'react'

import type { Metadata } from 'next'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
import Card from '@mui/material/Card'
import './globals.scss'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Тестирование',
    description: 'Прохождение тестирования на вакансию фронтенд-разработчика',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html className={roboto.className} lang="ru">
            <body>
                <main>
                    <Card sx={{ maxWidth: 500, minWidth: 275, margin: '200px auto 0', padding: '10px', borderRadius: '5px' }}>
                        {children}
                    </Card>
                </main>
                <Script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js" />
                <Script src="https://unpkg.com/@smash-sdk/uploader/dist/SmashUploader.browser.js" />
            </body>
        </html>
    )
}
