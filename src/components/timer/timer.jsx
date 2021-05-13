import { useContext } from "react"
import { TimersContext } from "../context"
import { NotifyCheckbox } from "../notify"
import useTimer from "../../hooks/use-timer"

const Timer = ({ title, seconds, doneText }) => {
  const { notify } = useContext(TimersContext)
  const { timer, toggleStop } = useTimer(seconds, doneText, notify.enabled)

  return (
    <div>
      <h1>{title}</h1>
      <p>{timer.countdown}</p>
      {notify.supported && <NotifyCheckbox />}
      <button className="btn" onClick={toggleStop}>
        {timer.stop ? "Start" : "Stop"}
      </button>
    </div>
  )
}

export default Timer
