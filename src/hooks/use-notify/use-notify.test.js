import { waitFor } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"
import useNotify from "./use-notify"

describe("useNotify", () => {
  const permission = jest.spyOn(global.Notification, "permission", "get")
  const requestPermission = jest.spyOn(global.Notification, "requestPermission")

  test("sets permitted state to true when Notification permission value is granted", () => {
    permission.mockReturnValue("granted")

    const { result } = renderHook(() => useNotify())

    expect(result.current.permitted).toBe(true)

    permission.mockRestore()
  })

  test("sets permitted state to true when requestPermission is granted", async () => {
    const { result } = renderHook(() => useNotify())

    expect(result.current.permitted).toBe(false)

    act(() => {
      requestPermission.mockResolvedValueOnce("granted")
      result.current.permitNotify()
    })

    await waitFor(() => expect(result.current.permitted).toBe(true))

    requestPermission.mockRestore()
  })
})
