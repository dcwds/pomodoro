import { useContext } from "react"
import { TimersContext } from "../context"

const NotifyCheckbox = () => {
  const { notify } = useContext(TimersContext)

  const onChange = () => {
    notify.permitNotify()
    notify.setEnabled(!notify.enabled)
  }

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={notify.enabled}
        onChange={onChange}
      />
      Notify me when timer ends.
    </div>
  )
}

export default NotifyCheckbox
