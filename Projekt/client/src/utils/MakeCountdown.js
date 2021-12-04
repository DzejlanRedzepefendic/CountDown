export const makeCountdown = (year, month, day, hour, minutes) => {
  var countDownDate = new Date(
    `${month} ${day}, ${year} ${hour}:${minutes}:00`
  ).getTime()
  var now = new Date().getTime()
  var timeleft = countDownDate - now
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
  let result = [days, hours, minutes, seconds]
  return result
}
