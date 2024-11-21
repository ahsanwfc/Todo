import React from "react";
import tick from "../assets/tick.png";
import removeBin from "../assets/delete.png";
import noTick from "../assets/not_tick.png";

const TodoList = ({ text, id, isComplete, deleteTodo, completeTodo }) => {
  return (
    <div className="flex gap-5 item-center justify-between mt-5">
      <div
        onClick={() => {
          completeTodo(id);
        }}
        className="flex flex-1 items-center cursor-pointer gap-2"
      >
        <img className="w-5 h-5" src={isComplete ? tick : noTick} alt="" />
        <p className={`text-gray-900 ${isComplete ? "line-through" : ""}`}>
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-4 h-4 cursor-pointer"
        src={removeBin}
        alt=""
      />
    </div>
  );
};

export default TodoList;
