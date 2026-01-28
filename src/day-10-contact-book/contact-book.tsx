import React, { useState } from "react";
import PersonCard from "./person-card";
import NewContactForm from "./new-contact-form";
import PersonForm from "./person-form";

export type Person = {
  id: string;
  name: string;
  city: string;
};

const ContactBook = () => {
  const [contactsList, setContactsList] = useState<Person[]>([]);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);

  return (
    <div className=" p-4 min-h-dvh">
      <NewContactForm setContactsList={setContactsList} />
      <div className="container mx-auto">
        <h1 className="text-3xl py-6">Contacts Book</h1>
        <div className="grid grid-cols-3 gap-4 ">
          {contactsList.map((contact: Person) => (
            <React.Fragment key={contact.id}>
              {editingContactId === contact.id ? (
                <PersonForm
                  contact={contact}
                  editingContactId={editingContactId}
                  setContactsList={setContactsList}
                  setEditingContactId={setEditingContactId}
                />
              ) : (
                <PersonCard
                  contact={contact}
                  setEditingContactId={setEditingContactId}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactBook;
