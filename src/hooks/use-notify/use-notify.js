import { useState } from "react"

const useNotify = () => {
  const [notify, setNotify] = useState({
    supported: "Notification" in window,
    permitted: false || Notification.permission === "granted"
  })

  const permitNotify = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setNotify((s) => {
          const { permitted, ...rest } = s

          return {
            permitted: true,
            ...rest
          }
        })
      }
    })
  }

  return { notify, permitNotify }
}

export default useNotify
