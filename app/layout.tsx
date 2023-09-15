import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Тестирование',
    description: 'Прохождение тестирования на вакансию фронтенд-разработчика',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    )
}
