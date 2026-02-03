import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import { dateFormatter, timeFormatter } from "../helper";
import { useBookingForm } from "../store";
import { useRef } from "react";

const StepTwo = () => {
  const { data, setFields, reset } = useBookingForm();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const nameInput = nameRef.current;
    const phoneInput = phoneRef.current;

    if (!nameInput || !phoneInput) return;
    if (!nameInput.value || !phoneInput.value) return;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const payload = { ...data, name, phone };
    setFields({
      name,
      phone,
    });
    console.log(payload, "data for backend");
    reset();
  };
  return (
    <div className="text-black">
      <h4>
        <strong>Contact details</strong>
      </h4>
      <div className="bg-sky-200 p-2 mt-2">
        <p>
          You are making a reservation for{" "}
          <strong>{data.numberOfPeople}</strong>{" "}
          {data.numberOfPeople === 1 ? "person" : "persons"}, on{" "}
          <strong>{dateFormatter.format(data.reservationDate)}</strong> at{" "}
          <strong>{timeFormatter.format(data.reservationTime)}</strong>
        </p>
      </div>
      <Fieldset className="space-y-8 mt-4">
        <Field>
          <Label className="block">Name</Label>
          <Input
            className="mt-1 block border border-sky-600 data-[hover]:shadow data-[focus]:bg-sky-100 w-full p-1"
            name="name"
            ref={nameRef}
          />
        </Field>
        <Field>
          <Label className="block">Phone number</Label>
          <Input
            className="mt-1 block border border-sky-600 data-[hover]:shadow data-[focus]:bg-sky-100 w-full p-1"
            name="phone"
            ref={phoneRef}
          />
        </Field>
      </Fieldset>
      <Button onClick={handleSubmit} className="text-white mt-10">
        Confirm reservation
      </Button>
    </div>
  );
};

export default StepTwo;
