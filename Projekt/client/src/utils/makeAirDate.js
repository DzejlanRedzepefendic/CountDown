import { getMonthString } from "./getMonthString"

export const makeAir_Date = (inputDate) => {
    const date = inputDate.split('-').map(v => parseInt(v))
    return { year: date[0], month: getMonthString(date[1] < 10 ? date[1] % 10 : date[1]), day: date[2] }
}