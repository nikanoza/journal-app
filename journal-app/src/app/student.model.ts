export interface Student{
    name: string,
    id: number,
    age: number,
    marks: {date: string, mark: number}[],
    average: number
}