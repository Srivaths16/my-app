"use client";
import { SetStateAction, useState } from "react";

export default function Page() {
  const [task, setTask] = useState("");

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setTask(e.target.value);
  }
  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen mx-auto bg-gradient-to-br from-purple-500 to-blue-400">
      <div className="bg-white max-w-96 p-4 rounded-lg">
        <h2>To do List</h2>
        <div className="mx-auto">
          <input
            type="text"
            id="input-box"
            placeholder="add your task"
            value={task}
            onChange={handleChange}
          />
          <button
            type="button"
            className="bg-orange-500 px-2 rounded-lg text-sm py-1 text-white"
            onClick={() => {
              console.log(task);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
