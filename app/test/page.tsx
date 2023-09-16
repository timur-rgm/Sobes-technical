import { Question } from '@/types/questions'

import List from '../../components/List/List'

async function getData(): Promise<Question[]> {
    const response = await fetch('https://e23501e132d94431.mokky.dev/questions')

    if (!response.ok) {
        throw new Error('Ошибка при загрузке данных')
    }

    return response.json()
}

export default async function Test() {
    const questions = await getData()

    return <List questions={questions} />
}
