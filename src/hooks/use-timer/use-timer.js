import { useState, useEffect } from "react"
import { secondsToTime, formatTime } from "./fns"

const useTimer = (seconds) => {
  const [timer, setTimer] = useState({
    seconds,
    formattedTime: formatTime(secondsToTime(seconds)),
    stopped: false
  })

  const toggleStopped = () =>
    setTimer((s) => {
      const { stopped, ...rest } = s

      return {
        stopped: !stopped,
        ...rest
      }
    })

  useEffect(() => {
    let { seconds, stopped } = timer

    const tick = setInterval(() => {
      --seconds

      setTimer({
        seconds,
        formattedTime: formatTime(secondsToTime(seconds)),
        stopped: stopped || seconds === 0
      })
    }, 1000)

    if (stopped) {
      clearInterval(tick)
    }

    return () => clearInterval(tick)
  })

  return { timer, toggleStopped }
}

export default useTimer
