import ToDoList from "./to-do-list";

export type TodosType = {
  id: string;
  text: string;
  status: "to-do" | "in-progress" | "done" | "delete-task-area";
};
export type ColumnType = {
  id: string;
  title: string;
};
const COLUMNS: ColumnType[] = [
  { id: "to-do", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const DragDropList = () => {
  return (
    <ToDoList
      todos={[
        { id: '1', text: "buy milk", status: "to-do" },
        { id: '2', text: "wash bike", status: "in-progress" },
        { id: '3', text: "do the budget", status: "done" },
        { id: '4', text: "call jane", status: "to-do" },
      ]}
      columns={COLUMNS}
    />
  );
};

export default DragDropList;
