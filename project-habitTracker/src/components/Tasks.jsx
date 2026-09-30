const Tasks = () => {
  return (
    <div className="px-2 mt-8 w-full border-amber-50  border-b pb-5">
      <h2 className="text-amber-50 mb-5 flex items-center justify-center font-mono text-2xl">
        Habits you do in your Day-To-Day life!!!
      </h2>
      <div className="bg-[#f0e7e7] sm:w-full  gap-4 lg:w-1/2 h-20 rounded-2xl flex items-center">
        <div className="w-10 h-10 rounded-full ml-2 border-2 border-[#8a8787] hover:bg-[#333333] duration-200 transition-all "></div>
        <form className="w-full">
          <input
            className="font-mono text-[hsl(0, 0%, 10%)] outline-0 w-full"
            placeholder="One of the Habit!!!"
          />
        </form>
      </div>
    </div>
  );
};

export default Tasks;
