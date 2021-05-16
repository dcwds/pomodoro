import { useContext } from "react"
import { TimersContext } from "../context"

const Notify = () => {
  const { notify } = useContext(TimersContext)

  const onChange = (e) => {
    const checked = e.target.checked

    if (checked && notify.permission !== "granted") notify.permitNotify()

    notify.setEnabled(checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={notify.enabled}
        onChange={onChange}
        aria-label="notify"
        id="notify"
        name="notify"
      />
      <label htmlFor="notify">Notify me when timer ends.</label>
    </div>
  )
}

export default Notify
