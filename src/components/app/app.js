import Timer from "../timer"
import { TIME_POMODORO } from "../../constants"
import "./app.css"

function App() {
  return (
    <div className="app">
      <Timer title="Pomodoro" seconds={TIME_POMODORO} />
    </div>
  )
}

export default App
