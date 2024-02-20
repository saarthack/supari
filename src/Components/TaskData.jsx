import React from "react";

const TaskData = () => {
  return (
    <div className="p-4 flex justify-between flex-wrap gap-0">
      <div className="bg-[#2985EE] w-[49%] py-2 px-2 rounded-md mb-2">
        <h2 className="text-4xl font-extrabold">0</h2>
        <h3 className="text-lg font-semibold mt-1">New Task</h3>
      </div>
      <div className="bg-[#95C959] w-[49%] py-2 px-2 rounded-md mb-2">
        <h2 className="text-4xl font-extrabold">0</h2>
        <h3 className="text-lg font-semibold mt-1">Completed</h3>
      </div>
      <div className="bg-[#FFD130] w-[49%] py-2 px-2 rounded-md text-black">
        <h2 className="text-4xl font-extrabold">0</h2>
        <h3 className="text-lg font-semibold mt-1">Accepted</h3>
      </div>
      <div className="bg-[#DE6840] w-[49%] py-2 px-2 rounded-md">
        <h2 className="text-4xl font-extrabold">0</h2>
        <h3 className="text-lg font-semibold mt-1">Failed</h3>
      </div>
    </div>
  );
};

export default TaskData;
