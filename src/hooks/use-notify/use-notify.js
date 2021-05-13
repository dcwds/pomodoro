import { useState } from "react"

const useNotify = () => {
  const supported = "Notification" in window
  const [ permitted, setPermitted ] = useState(
    false || (supported && Notification.permission === "granted")
  )
  const [ enabled, setEnabled ] = useState(false)

  const permitNotify = async () => {
    const permission = await Notification.requestPermission()

    if(permission === "granted") {
      setPermitted(true)
    }
  }

  return {
    supported,
    permitted,
    enabled,
    setEnabled,
    permitNotify
  }
}

export default useNotify
