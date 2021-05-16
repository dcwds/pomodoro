import { useContext } from "react"
import { TimersContext } from "../context"
import Notify from "../notify"
import useTimer from "../../hooks/use-timer"

const Timer = ({ title, seconds, doneText }) => {
  const { notify } = useContext(TimersContext)
  const { timer, toggleStop } = useTimer(seconds, doneText, notify.enabled)

  return (
    <div>
      <h1>{title}</h1>
      <p arial-label="countdown">{timer.countdown}</p>
      {notify.supported && <Notify />}
      <button
        aria-label={timer.stop ? "start-button" : "stop-button"}
        className="btn"
        onClick={toggleStop}
      >
        {timer.stop ? "Start" : "Stop"}
      </button>
    </div>
  )
}

export default Timer
