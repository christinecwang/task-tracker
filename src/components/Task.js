import { FaTimes } from "react-icons/fa"

const Meridian = (task) => {
  var timeSplit = task.time.split(":"),
    hours,
    minutes,
    meridian

  hours = timeSplit[0]
  minutes = timeSplit[1]

  if (hours > 12) {
    meridian = "PM"
    hours -= 12
  } else if (hours < 12) {
    meridian = "AM"
    if (hours === 0) hours = 12
  } else {
    meridian = "PM"
  }

  if (!task.time) {
    return task.time
  } else {
    return hours + ":" + minutes + " " + meridian
  }
}

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "#92a8d1", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <p>{Meridian(task)}</p>
    </div>
  )
}

export default Task
