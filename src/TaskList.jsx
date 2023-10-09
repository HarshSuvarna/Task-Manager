import { Task } from "./Task";

export function TodoList({ toggleTodo, deleteTodo, todos }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No tasks"}
      {todos.map((todo) => {
        return (
          <Task
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.key}
          />
        );
      })}
    </ul>
  );
}
