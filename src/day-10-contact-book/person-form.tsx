import React from "react";
import type { Person } from "./contact-book";

type Props = {
  contact: Person;
  editingContactId: string | null;
  setEditingContactId: React.Dispatch<React.SetStateAction<string | null>>;
  setContactsList: React.Dispatch<React.SetStateAction<Person[]>>;
};
const PersonForm = ({
  contact,
  setContactsList,
  editingContactId,
  setEditingContactId,
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setContactsList?.((prev) =>
      prev.map((c) =>
        editingContactId === c.id
          ? {
              ...c,
              name: String(formData.get("name")),
              city: String(formData.get("city")),
            }
          : c,
      ),
    );

    setEditingContactId?.(null);
  };
  const onCancel = () => {
    setEditingContactId?.(null);
  };

  const handleDelete = () => {
    setContactsList?.((prev) => prev.filter((c) => c.id !== editingContactId));
    setEditingContactId?.(null);
  };
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm min-h-44 border border-blue-300">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="input input-sm">
            <span className="label">Name:</span>
            <input
              type="text"
              name="name"
              defaultValue={contact.name}
              className="border border-blue-200"
            />
          </label>
          <label className="input input-sm">
            <span className="label">City:</span>
            <input
              type="text"
              name="city"
              defaultValue={contact.city}
              className="border border-blue-200"
            />
          </label>
          <div className="justify-end card-actions mt-2">
            <button onClick={handleDelete}>Delete</button>
            <button type="button" className="btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonForm;
