import { secondsToTime, formatTime } from "./fns"

describe("timer", () => {
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
    expect(formatTime({ hours: 1, minutes: 25, seconds: 9 })).toBe("01:25:09")
  })

  test("formats time 2", () => {
    expect(formatTime({ minutes: 24, seconds: 49 })).toBe("24:49")
  })
})
