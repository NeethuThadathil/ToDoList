import { useState } from "react";
import "./App.css"

export default function TodoApp() {

  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])

  //  to update a new task
  const getNewTask = (e) => {
    const value = e.target.value;
    setNewTask(value)
    console.log("new task entered");
    console.log(newTask);
  };

  //  add the new task to the list

  const updateTodolist = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      setTasks([...tasks, newTask]); // Correctly updating the tasks array
      setNewTask(""); // Clearing input field after adding
    }
  };
  // clear the input field
  const clearInput = () => {
    setNewTask("");
  };
  // delete a task from toDo list
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center w-100' style={{ height: '100vh' }}>
        <div className='d-flex justfy-content-center align-items-center p-5 rounded flex-column'
          style={ {backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px)'} }>
          <h2 className='text-primary m-5'>TO DO LIST</h2>
          <div className='d-flex align-items-center justify-ontent-center w-100 flex-column'>

            <div className="w-100">
              <div className="flex gap-2 mb-4">
                <input type="text"
                  className="form-control w-100"
                  placeholder="Add a task..." value={newTask} onChange={(e) => getNewTask(e)} />
                <div className=" d-flex justify-content-center">
                  <button className="btn btn-primary text-white px-4 py-2 rounded-lg m-5 text-center"
                    onClick={(e) => updateTodolist(e)}>
                    ADD TO LIST
                  </button>
                  <button className="btn btn-primary text-white px-4 py-2 rounded-lg m-5 text-center"
                    onClick={clearInput} >
                    CLEAR
                  </button>
                </div>
                {/* render task */}
                <ul >
                  {tasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      {task}
                      <button style={{ border: "none", background: "transparent" }} onClick={() => deleteTask(index)}>
                        <i className="fa-solid fa-trash fa-lg" style={{ color: "#0066ff" }}></i>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
