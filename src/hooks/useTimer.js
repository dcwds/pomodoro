import { useState, useEffect } from "react"
import { secondsToTime, formatTime } from "../components/timer/fns"

const useTimer = (seconds) => {
  const time = secondsToTime(seconds)

  const [timer, setTimer] = useState({
    seconds: seconds,
    time,
    formattedTime: formatTime(time),
    stopped: false
  })

  useEffect(() => {
    let { seconds, stopped } = timer

    const newTime = secondsToTime(seconds--)
    const tick = setInterval(
      () =>
        setTimer({
          seconds,
          time: newTime,
          formattedTime: formatTime(newTime)
        }),
      1000
    )

    if (stopped) {
      clearInterval(tick)
    }

    return () => clearInterval(tick)
  })

  return [timer, setTimer]
}

export default useTimer
