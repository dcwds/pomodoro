import { useState, useEffect } from "react"
import { secondsToTime, timeToCountdown } from "./fns"
import { NOTIFY_TITLE } from "../../constants"

const useTimer = (seconds, doneText, notifyEnabled) => {
  const [timer, setTimer] = useState({
    seconds,
    countdown: timeToCountdown(secondsToTime(seconds)),
    done: false,
    stop: true
  })

  const toggleStop = () =>
    setTimer(({ stop, ...rest }) => ({
      ...rest,
      stop: !stop
    }))

  useEffect(() => {
    let { seconds, done, stop } = timer

    const tick = setInterval(() => {
      --seconds

      setTimer({
        seconds,
        countdown: timeToCountdown(secondsToTime(seconds)),
        done: done || seconds === 0,
        stop: stop || seconds === 0
      })
    }, 1000)

    if (stop) {
      clearInterval(tick)
    }

    return () => clearInterval(tick)
  })

  useEffect(() => {
    if (notifyEnabled && timer.done) {
      const notifyDone = new Notification(NOTIFY_TITLE, {
        body: doneText
      })

      return () => notifyDone.close()
    }
  }, [timer.done, doneText, notifyEnabled])

  return { timer, toggleStop }
}

export default useTimer
