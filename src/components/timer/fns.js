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
      let val = Math.floor(seconds / unit)

      seconds = seconds % unit

      res[`${key}s`] = val
    } else {
      res[`${key}s`] = 0
    }
  })

  return res
}

const formatTime = (time) =>
  Object.keys(time)
    .map((key) => {
      const amount = time[key]

      return String(amount).padStart(2, "0")
    })
    .join(":")

export { secondsToTime, formatTime }
