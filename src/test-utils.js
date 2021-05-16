import { render } from "@testing-library/react"
import { TimersContext } from "./components/context"

export const renderWithProvider = (ui, { providerProps, ...renderOptions }) =>
  render(
    <TimersContext.Provider {...providerProps}>{ui}</TimersContext.Provider>,
    renderOptions
  )
