import { useEffect, useState } from "react";
import { NewTodoForm } from "./TaskForm";
import "./styles.css";
import { TodoList } from "./TaskList";
import { CssTest } from "./cssTest";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id, completed) => {
    setTodos((ct) => {
      return ct.map((todo) => {
        return todo.id === id ? { ...todo, completed } : todo;
      });
    });
  };

  const addTodo = (title) => {
    if (title === "") return;
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((ct) => {
      return ct.filter((t) => t.id !== id);
    });
  };
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-do List</h1>
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
      <CssTest />
    </>
  );
}

export default App;
