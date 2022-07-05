import { useState } from "react";

const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  // console.log(task);
  // console.log(day);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    setTasks(...tasks, newTask); //*yeni eleman eklemek için önce açtık sonra ekledik
    setTask(""); //*girilen değerlerden sonra sıfırlasın.
    setDay("");
  };
  console.log(task);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Task</label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            placeholder="add task"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Day & Time</label>
          <input
            type="date"
            id="day"
            name="day"
            value={day}
            // placeholder="Day & Time"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      {/* <div class="alert alert-danger" role="alert">
        This is a danger alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div> */}
    </div>
  );
};

export default AddTaskForm;
