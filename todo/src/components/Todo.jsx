import React, { useEffect, useRef, useState } from "react";
import todoIcon from "../assets/todo_icon.png";
import TodoList from "./TodoList";

const Todo = () => {
  const inputRef = useRef();
  const [todo, setTodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const add = () => {
    const inputValue = inputRef.current.value.trim();
    if (!inputValue) {
      return null;
    }
    const todoList = {
      id: Date.now(),
      text: inputValue,
      isComplete: false,
    };
    setTodo((prev) => [...prev, todoList]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    return setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    // console.log(todo);
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="bg-white place-self-center border rounded-xl flex flex-col w-11/12 max-w-md p-7 h-[500px] overflow-y-auto ">
        <div className="flex items-center mt-8 mb-5 gap-5">
          <img className="w-8" src={todoIcon} alt="" />
          <h1 className="text-2xl font-semibold">To-Do-List</h1>
        </div>
        <div className="relative">
          <input
            className="w-full border border-gray-500 px-2 py-2 rounded-xl"
            type="text"
            placeholder="write something"
            ref={inputRef}
          />
          <div className="absolute top-0 right-0">
            <button
              onClick={add}
              className="text-white bg-orange-600 px-3 py-2 text-base font-medium rounded-xl"
            >
              ADD +
            </button>
          </div>
        </div>
        {todo.map((item, index) => {
          return (
            <TodoList
              key={index}
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
