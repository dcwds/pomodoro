import { useContext } from "react"
import { TimersContext } from "../context"

const NotifyCheckbox = () => {
  const { notify } = useContext(TimersContext)

  const onChange = (e) => {
    const checked = e.target.checked

    if(checked) notify.permitNotify()

    notify.setEnabled(checked)
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
