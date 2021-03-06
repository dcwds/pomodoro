import Provider from "../context"
import Timer from "../timer"
import { TIME_POMODORO } from "../../constants"
import "./app.css"

function App() {
  return (
    <Provider>
      <div className="app">
        <Timer
          title="Pomodoro"
          seconds={TIME_POMODORO}
          doneText="You have finished this pomodoro. Take a break!"
        />
      </div>
    </Provider>
  )
}

export default App
