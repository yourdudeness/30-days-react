import { useRef, useState } from "react";
import type { ColumnType, TodosType } from "./drag-drop-list";
import Column from "./container";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import DropToDeleteArea from "./delete-area";

type Props = {
  todos: TodosType[];
  columns: ColumnType[];
};

const ToDoList = ({ todos, columns }: Props) => {
  const [todosList, setTodosList] = useState<TodosType[]>(todos);

  const todoRef = useRef<HTMLInputElement>(null);

  const deleteTodo = (draggedTodoId: string | number) => {
    setTodosList(todos.filter((todo) => todo.id !== draggedTodoId));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TodosType["status"];

    if (newStatus === "delete-task-area") {
      deleteTodo(active.id);
    }

    setTodosList(() =>
      todosList.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = todoRef.current;
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    setTodosList([...todosList, { id: uuidv4(), text: text, status: "to-do" }]);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <form
        onSubmit={handleAddTodo}
        style={{ margin: "10px", display: "flex", gap: "10px" }}
      >
        <input
          type="text"
          name="newTodoText"
          placeholder="type in your todo"
          ref={todoRef}
        />
        <button type="submit">Add todo</button>
      </form>
      <div style={{ display: "flex" }}>
        {columns.map((column) => {
          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              items={todosList.filter((item) => item.status == column.id)}
            />
          );
        })}
      </div>

      <DropToDeleteArea />
    </DndContext>
  );
};

export default ToDoList;
