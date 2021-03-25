import { useState, useEffect } from "react"
import { secondsToTime, formatTime } from "./fns"

const useTimer = (seconds) => {
  const [timer, setTimer] = useState({
    seconds,
    formattedTime: formatTime(secondsToTime(seconds)),
    stop: true
  })

  const toggleStop = () =>
    setTimer((s) => {
      const { stop, ...rest } = s

      return {
        stop: !stop,
        ...rest
      }
    })

  useEffect(() => {
    let { seconds, stop } = timer

    const tick = setInterval(() => {
      --seconds

      setTimer({
        seconds,
        formattedTime: formatTime(secondsToTime(seconds)),
        stop: stop || seconds === 0
      })
    }, 1000)

    if (stop) {
      clearInterval(tick)
    }

    return () => clearInterval(tick)
  })

  return { timer, toggleStop }
}

export default useTimer
