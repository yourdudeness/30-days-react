import { useDroppable } from "@dnd-kit/core";
import Card from "./card";
import type { TodosType } from "./drag-drop-list";

type Props = {
  id: string;
  items: TodosType[];
  title: string;
};

const Column = ({ id, items, title }: Props) => {

  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
      }}
    >
      <h4>{title}</h4>
      {items.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
      
    </div>
  );
};

export default Column;
