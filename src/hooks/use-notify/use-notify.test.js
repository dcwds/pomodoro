import { waitFor } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"
import useNotify from "./use-notify"

describe("useNotify", () => {
  test("sets permitted state to true when Notification permission value is granted", () => {
    const permission = jest.spyOn(global.Notification, "permission", "get")
    permission.mockReturnValue("granted")

    const { result } = renderHook(() => useNotify())

    expect(result.current.permitted).toBe(true)
  })

  test("sets permitted state to true when requestPermission is granted", async () => {
    const requestPermission = jest.spyOn(
      global.Notification,
      "requestPermission"
    )

    const { result } = renderHook(() => useNotify())

    expect(result.current.permitted).toBe(false)

    act(() => {
      requestPermission.mockResolvedValueOnce("granted")
      result.current.permitNotify()
    })

    await waitFor(() => expect(result.current.permitted).toBe(true))
  })
})
