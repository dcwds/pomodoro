import { renderWithProvider } from "../../test-utils"
import { act, fireEvent, screen, waitFor } from "@testing-library/react"
import Timer from "./timer"

describe("Timer", () => {
  test("does not render notify checkbox when notifications aren't supported", () => {
    const providerProps = {
      value: {
        notify: {
          supported: false
        }
      }
    }

    renderWithProvider(
      <Timer title="Pomodoro" seconds={10} doneText="done" />,
      { providerProps }
    )

    expect(screen.queryByLabelText(/notify/i)).not.toBeInTheDocument()
  })

  test("shows notification when timer is done", async () => {
    const notification = jest.spyOn(global, "Notification")

    const providerProps = {
      value: {
        notify: {
          enabled: true,
          supported: true
        }
      }
    }

    renderWithProvider(<Timer title="Pomodoro" seconds={1} doneText="done" />, {
      providerProps
    })

    const startButton = screen.getByLabelText(/start-button/i)
    fireEvent.click(startButton)

    act(() => jest.advanceTimersByTime(1000))

    await waitFor(() => expect(notification).toHaveBeenCalledTimes(1))

    notification.mockRestore()
  })
})
