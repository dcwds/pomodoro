import { renderWithProvider } from "../../test-utils"
import { screen, fireEvent } from "@testing-library/react"
import Notify from "./notify"

describe("Notify", () => {
  test("enables notifications when checkbox is checked and notifications are permitted", () => {
    const providerProps = {
      value: {
        notify: {
          permitNotify: jest.fn(),
          permitted: true,
          enabled: false,
          setEnabled: jest.fn()
        }
      }
    }

    renderWithProvider(<Notify />, { providerProps })

    const checkbox = screen.getByLabelText(/notify/i)
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(providerProps.value.notify.setEnabled).toHaveBeenCalledTimes(1)

    // notifications are permitted, so permitNotify shouldn't be called
    expect(providerProps.value.notify.permitNotify).not.toHaveBeenCalled()
  })

  test("asks for user permission for notifications when notifications aren't permitted", () => {
    const providerProps = {
      value: {
        notify: {
          permitNotify: jest.fn(),
          permitted: false,
          enabled: false,
          setEnabled: jest.fn()
        }
      }
    }

    renderWithProvider(<Notify />, { providerProps })

    const checkbox = screen.getByLabelText(/notify/i)
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(providerProps.value.notify.permitNotify).toHaveBeenCalledTimes(1)
    expect(providerProps.value.notify.setEnabled).toHaveBeenCalledTimes(1)
  })
})
