import { NotifyCheckbox } from "../notify"
import useTimer from "../../hooks/use-timer"
import useNotify from "../../hooks/use-notify"

const Timer = ({ title, seconds, doneText }) => {
  const { timer, toggleStop } = useTimer(seconds, doneText)
  const { notify } = useNotify()

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
