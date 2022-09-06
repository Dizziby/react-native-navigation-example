const arrName = ["Pavel", "Alexei", "Alex", "Dmitry", "Vasiliy", "Sveta", "Vlad", "Kostya", "Valera", "Max"]
const arrAge = [12, 30, 29, 28, 27, 26, 25, 24, 23, 22]

export type UserType = {
    id: number
    name: string
    age: number
}

export const users: UserType[] = new Array(10).fill(null).map((el, index) => ({
    id: index + 1,
    name: arrName[index],
    age: arrAge[index],
}))