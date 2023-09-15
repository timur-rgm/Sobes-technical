export type Question = {
    id: number
    type: 'text' | 'single' | 'multiple' | 'video' | 'photo'
    title: string
    options?: string[] | number[]
}
