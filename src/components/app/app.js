import Timer from "../timer"
import { TIME_POMODORO } from "../timer/defaults"
import "./app.css"

function App() {
  return (
    <div className="app">
      <Timer title="Pomodoro" seconds={TIME_POMODORO} />
    </div>
  )
}

export default App
