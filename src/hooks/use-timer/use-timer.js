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
        ...rest,
        stop: !stop
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

  /*
  useEffect(() => {
    if (timer.stop) {
      let notifyStop = new Notification("Pomodoro", {
        body: "Timer has been stopped."
      })

      return () => notifyStop.close()
    } else {
      let notifyStart = new Notification("Pomodoro", {
        body: "Timer has been started."
      })

      return () => notifyStart.close()
    }
  }, [timer.stop])
  */

  return { timer, toggleStop }
}

export default useTimer
