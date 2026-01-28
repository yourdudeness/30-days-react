import React, { useRef } from "react";
import type { Person } from "./contact-book";
import { v4 as uuidv4 } from "uuid";

type Props = {
  setContactsList: React.Dispatch<React.SetStateAction<Person[]>>;
};
const NewContactForm = ({ setContactsList }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameInput = nameRef.current;
    const cityInput = cityRef.current;
    if (!nameInput || !cityInput) return;

    const name = nameInput.value.trim();
    const city = cityInput.value.trim();
    if (!name || !city) return;

    setContactsList((prev) => [...prev, { id: String(uuidv4()), name, city }]);

    nameInput.value = "";
    cityInput.value = "";
  };
  return (
    <div className="border border-cyan-200 p-2 mb-4 w-xl">
      <h4>NewContactForm</h4>
      <form onSubmit={handleAddContact} className="flex gap-4 align-center p-4">
        <input
          type="text"
          ref={nameRef}
          placeholder="Name"
          className="border border-cyan-200"
        />
        <input
          type="text"
          ref={cityRef}
          placeholder="City"
          className="border border-cyan-200"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default NewContactForm;
