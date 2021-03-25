/*
Component takes the following props:
- title (Pomodoro, Short Break, Long Break)
- secondsCount

Component state will include:
- secondsCount
- secondsToTime object
- formattedTime string
- stopped boolean

Component behavior:
- decrement secondsCount every second
- timer can be started and stopped
*/

import Timer from "./timer"

export default Timer
