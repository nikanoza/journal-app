export interface Student{
    name: string,
    id: string,
    age: number,
    marks: {date: string, mark: number}[],
    average: number
}