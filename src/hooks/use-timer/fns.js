const secondsToTime = (seconds) => {
  const timeInSeconds = {
    hour: 3600,
    minute: 60,
    second: 1
  }

  let res = {}

  Object.keys(timeInSeconds).forEach((key) => {
    const unit = timeInSeconds[key]

    if (seconds >= unit) {
      res[`${key}s`] = Math.floor(seconds / unit)
      seconds = seconds % unit
    } else {
      res[`${key}s`] = 0
    }
  })

  return res
}

const formatTime = (time) =>
  Object.keys(time)
    .map((key) => String(time[key]).padStart(2, "0"))
    .join(":")

export { secondsToTime, formatTime }
