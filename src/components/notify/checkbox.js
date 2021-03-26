import useNotify from "../../hooks/use-notify"

const NotifyCheckbox = () => {
  const { notify, permitNotify } = useNotify()

  return (
    <div>
      <input
        type="checkbox"
        checked={notify.permitted}
        onChange={permitNotify}
      />
      Notify me when timer ends.
    </div>
  )
}

export default NotifyCheckbox
