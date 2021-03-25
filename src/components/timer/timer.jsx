import useTimer from "../../hooks/use-timer"

const Timer = ({ title, seconds }) => {
  const { timer } = useTimer(seconds)

  return (
    <div>
      <h1>{title}</h1>
      <p>{timer.formattedTime}</p>
    </div>
  )
}

export default Timer
