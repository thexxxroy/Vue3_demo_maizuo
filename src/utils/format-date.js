import dayjs from "dayjs"

export function formatDate(date){
  return dayjs.unix(date).format("YYYY.MM.DD")
}