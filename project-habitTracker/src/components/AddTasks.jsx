import { useState } from "react";

const AddTasks = ({ onAddTask }) => {
  const [showForm, setShowForm] = useState(false);
  const [taskName, setTaskName] = useState("");

  function handleClick() {
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskName.trim()) return;

    console.log("Task submitted:", taskName);
    setTaskName("");
    setShowForm(false);
    onAddTask(taskName);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Add a taskName"
        className="fixed bottom-6 right-6 z-10 flex h-15 w-15 items-center justify-center rounded-full bg-[#f0e7e7] transition-all duration-200 hover:bg-[#999696]"
        onClick={handleClick}
      >
        <i className="ri-add-large-line text-3xl" aria-hidden="true"></i>
      </button>

      {showForm && (
        <div className="fixed inset-0 z-20 flex items-center justify-center "
        onClick={() => setShowForm(false)}>
          <div
            className="w-100 h-50 bg-white/10 backdrop-blur-lg transition-all duration-200  rounded-lg border border-amber-50 px-3"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              className="text-center text-2xl mt-5 tracking-wider rounded-lg w-full   shadow-md"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter taskName..."
                className="bg-[#f0e7e7] text-gray-800 p-4 font-mono flex-1 rounded-3xl  placeholder:text-gray-500 border-none focus:outline-none"
              />

              <div className="flex gap-4 mt-5 justify-center">
                <button
                  className=" rounded-lg  text-amber-50 px-3 py-2 transition-all duration-200"
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" rounded-lg  text-amber-50 hover:border px-4 py-2 font-bold tracking-wide transition-all duration-200"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTasks;
    