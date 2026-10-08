
import { useState, useEffect } from "react";

function Todo() {
  // ================================
  // STATES
  // ================================

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // ================================
  // LOAD TASKS
  // ================================

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });

  // ================================
  // SAVE TASKS
  // ================================

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // ================================
  // ADD TASK
  // ================================

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      priority: priority,
      dueDate: dueDate,
      completed: false
    };

    setTasks([
      ...tasks,
      newTask
    ]);

    setTask("");
    setPriority("medium");
    setDueDate("");
  }

  // ================================
  // START EDIT
  // ================================

  function startEdit(item) {
    setEditingTask(item.id);

    setTask(item.text);

    setPriority(item.priority);

    setDueDate(item.dueDate || "");
  }

  // ================================
  // UPDATE TASK
  // ================================

  function updateTask() {
    if (task.trim() === "") {
      return;
    }

    setTasks(
      tasks.map((item) => {
        if (item.id === editingTask) {
          return {
            ...item,
            text: task,
            priority: priority,
            dueDate: dueDate
          };
        }

        return item;
      })
    );

    setTask("");
    setPriority("medium");
    setDueDate("");
    setEditingTask(null);
  }

  // ================================
  // CANCEL EDIT
  // ================================

  function cancelEdit() {
    setTask("");
    setPriority("medium");
    setDueDate("");
    setEditingTask(null);
  }

  // ================================
  // DELETE TASK
  // ================================

  function deleteTask(id) {
    setTasks(
      tasks.filter(
        (item) => item.id !== id
      )
    );

    if (editingTask === id) {
      cancelEdit();
    }
  }

  // ================================
  // COMPLETE / UNCOMPLETE
  // ================================

  function toggleTask(id) {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    );
  }

  // ================================
  // PRIORITY ICON
  // ================================

  function getPriorityIcon(priority) {
    if (priority === "high") {
      return "🔴";
    }

    if (priority === "medium") {
      return "🟡";
    }

    return "🟢";
  }

  // ================================
  // SEARCH + FILTER
  // ================================

  const filteredTasks = tasks.filter((item) => {
    const matchesSearch =
      item.text
        .toLowerCase()
        .includes(search.toLowerCase());

    let matchesFilter = true;

    if (filter === "pending") {
      matchesFilter =
        item.completed === false;
    }

    if (filter === "completed") {
      matchesFilter =
        item.completed === true;
    }

    return (
      matchesSearch &&
      matchesFilter
    );
  });

  // ================================
  // STATISTICS
  // ================================

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter(
      (item) => item.completed
    ).length;

  const pendingTasks =
    tasks.filter(
      (item) => !item.completed
    ).length;

  // ================================
  // PAGE
  // ================================

  return (
    <div className="page">

      {/* TITLE */}

      <h1>
        ✅ My To-Do List
      </h1>

      {/* STATISTICS */}

      <div className="task-stats">

        <div className="stat">
          <span>📋</span>

          <strong>
            {totalTasks}
          </strong>

          <small>
            Total
          </small>
        </div>

        <div className="stat">
          <span>⏳</span>

          <strong>
            {pendingTasks}
          </strong>

          <small>
            Pending
          </small>
        </div>

        <div className="stat">
          <span>✅</span>

          <strong>
            {completedTasks}
          </strong>

          <small>
            Completed
          </small>
        </div>

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder="🔎 Search your tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* ADD / EDIT TASK */}

      <div className="todo-input">

        <input
          type="text"
          placeholder={
            editingTask
              ? "Edit your task..."
              : "What do you need to do?"
          }
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (editingTask) {
                updateTask();
              } else {
                addTask();
              }
            }
          }}
        />

        {/* PRIORITY */}

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option value="high">
            🔴 High
          </option>

          <option value="medium">
            🟡 Medium
          </option>

          <option value="low">
            🟢 Low
          </option>
        </select>

        {/* DUE DATE */}

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

        {/* ADD / UPDATE */}

        {editingTask ? (
          <>
            <button
              onClick={updateTask}
            >
              💾 Update Task
            </button>

            <button
              onClick={cancelEdit}
            >
              ❌ Cancel
            </button>
          </>
        ) : (
          <button
            onClick={addTask}
          >
            ➕ Add Task
          </button>
        )}

      </div>

      {/* FILTER BUTTONS */}

      <div className="task-filters">

        <button
          onClick={() =>
            setFilter("all")
          }
        >
          📋 All
        </button>

        <button
          onClick={() =>
            setFilter("pending")
          }
        >
          ⏳ Pending
        </button>

        <button
          onClick={() =>
            setFilter("completed")
          }
        >
          ✅ Completed
        </button>

      </div>

      {/* TASK LIST */}

      <div className="task-list">

        {filteredTasks.length === 0 ? (
          <p>
            No tasks found. 🚀
          </p>
        ) : (
          filteredTasks.map((item) => (

            <div
              className="task"
              key={item.id}
            >

              {/* TASK TEXT */}

              <span
                onClick={() =>
                  toggleTask(item.id)
                }
                style={{
                  textDecoration:
                    item.completed
                      ? "line-through"
                      : "none",

                  opacity:
                    item.completed
                      ? 0.5
                      : 1,

                  cursor:
                    "pointer"
                }}
              >
                {item.completed
                  ? "✅ "
                  : "⬜ "}

                {item.text}
              </span>

              {/* PRIORITY */}

              <span>
                {getPriorityIcon(
                  item.priority
                )}

                {" "}

                {item.priority}
              </span>

              {/* DUE DATE */}

              {item.dueDate && (
                <span>
                  📅 {item.dueDate}
                </span>
              )}

              {/* EDIT */}

              <button
                onClick={() =>
                  startEdit(item)
                }
              >
                ✏️ Edit
              </button>

              {/* DELETE */}

              <button
                onClick={() =>
                  deleteTask(item.id)
                }
              >
                🗑️ Delete
              </button>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default Todo;

