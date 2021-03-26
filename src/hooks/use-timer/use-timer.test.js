import { renderHook, act } from "@testing-library/react-hooks"
import useTimer from "./use-timer"
import { secondsToTime, timeToCountdown } from "./fns"

describe("useTimer", () => {
  test("sets state from param", () => {
    const { result } = renderHook(() => useTimer(10))

    expect(result.current.timer).toEqual({
      seconds: 10,
      countdown: "00:00:10",
      done: false,
      stop: true
    })
  })

  test("toggles stopped state", () => {
    const { result } = renderHook(() => useTimer(10))

    act(() => {
      result.current.toggleStop()
    })

    expect(result.current.timer.stop).toBe(false)
  })
})

describe("timer fns", () => {
  test("converts seconds to time", () => {
    expect(secondsToTime(1500)).toEqual({
      hours: 0,
      minutes: 25,
      seconds: 0
    })
  })

  test("converts seconds to time 2", () => {
    expect(secondsToTime(3661)).toEqual({
      hours: 1,
      minutes: 1,
      seconds: 1
    })
  })

  test("formats time", () => {
    expect(timeToCountdown({ hours: 1, minutes: 25, seconds: 9 })).toBe(
      "01:25:09"
    )
  })

  test("formats time 2", () => {
    expect(timeToCountdown({ minutes: 24, seconds: 49 })).toBe("24:49")
  })
})
