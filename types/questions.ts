export type Question = {
    id: number
    type: QuestionType
    title: string
    options?: string[] | number[]
}

export type QuestionType = 'text' | 'single' | 'multiple' | 'video' | 'photo'

export type Answer = number | string | string[]
