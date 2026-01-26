import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
/** 
Написать todo лист на react, с функционалом
 - изменения статуса completed/uncompleted, в случае если completed, то элемент перечеркут
 - список итемов
 - инпут с возможностью добавления нового итема
*/
type Todo = {
  id: string;
  status: "completed" | "uncompleted";
  text: string;
};
export const SuperTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const input = todoRef.current;
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    setTodos((state) => [
      ...state,
      { id: uuidv4(), text: text, status: "uncompleted" },
    ]);

    input.value = "";
  };

  const changeStatus = (itemId: string) => {
    setTodos((state) =>
      state.map((item) =>
        item.id === itemId
          ? {
              ...item,
              status: item.status === "completed" ? "uncompleted" : "completed",
            }
          : item,
      ),
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodoText"
          placeholder="type in your todo"
          ref={todoRef}
        />
        <button type="submit">Add todo</button>
      </form>

      <div>
        <ul>
          {todos.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  listStyleType: "none",
                  margin: "10px 0",
                }}
              >
                <p
                  style={{
                    textDecoration:
                      item.status === "completed" ? "line-through" : "none",
                    color: item.status === "completed" ? "gray" : "white",
                  }}
                >
                  {item.text}
                </p>
                <button
                  type="button"
                  style={{ marginLeft: "10" }}
                  onClick={() => changeStatus(item.id)}
                >
                  change
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SuperTodoList;
