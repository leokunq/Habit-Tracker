const AddTasks = () => {
  return (
    <button
      type="button"
      aria-label="Add a task"
      className="fixed bottom-6 right-6 z-10 flex h-15 w-15 items-center justify-center rounded-full bg-[#f0e7e7] transition-all duration-200 hover:bg-[#999696]"
    >
      <i className="ri-add-large-line text-3xl" aria-hidden="true"></i>
    </button>
  );
};

export default AddTasks;
