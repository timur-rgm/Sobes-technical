export type Question = {
    id: number
    type: 'text' | 'radio' | 'check' | 'video' | 'photo'
    title: string
    options?: string[] | number[]
}
