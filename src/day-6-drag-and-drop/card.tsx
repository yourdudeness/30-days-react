import type { TodosType } from "./drag-drop-list";
import { useDraggable } from "@dnd-kit/core";

type Props = {
  item: TodosType;
};
const Card = ({ item }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div
      key={item.id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {item.text}
    </div>
  );
};

export default Card;
