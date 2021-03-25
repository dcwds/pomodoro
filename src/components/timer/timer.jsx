import useTimer from "../../hooks/use-timer"

const Timer = ({ title, seconds }) => {
  const { timer, toggleStop } = useTimer(seconds)

  return (
    <div>
      <h1>{title}</h1>
      <p>{timer.formattedTime}</p>
      <button className="btn" onClick={toggleStop}>
        {timer.stop ? "Start" : "Stop"}
      </button>
    </div>
  )
}

export default Timer
