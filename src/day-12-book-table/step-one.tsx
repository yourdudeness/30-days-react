import ReservationDate from "./reservation-date";
import ReservationTime from "./reservation-time";
import PersonDropdown from "./person-dropdown";
import { Button } from "@headlessui/react";
import { useBookingForm } from "../store";

const StepOne = () => {
  const { step, nextStep } = useBookingForm();
  console.log(step, "step");
  return (
    <div>
      <h2>Book a table modal</h2>
      <PersonDropdown />
      <ReservationDate />
      <ReservationTime />

      <Button onClick={nextStep}>Book now</Button>
    </div>
  );
};

export default StepOne;
