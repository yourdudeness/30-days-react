import type React from "react";
import type { Person } from "./contact-book";

type Props = {
  contact: Person;
  setEditingContactId: React.Dispatch<React.SetStateAction<string | null>>;
};
const PersonCard = ({ contact, setEditingContactId }: Props) => {
  const handleEdit = () => {
    setEditingContactId(contact.id);
  };
  
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm border border-blue-300">
      <div className="card-body flex items-start flex-col">
        <h2 className="card-title bold">{contact.name}</h2>
        <p>{contact.city}</p>
      </div>
      <div className="flex justify-end card-actions">
        <button className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
