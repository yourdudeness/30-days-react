import Modal from "./modal";
import StepOne from "./step-one";
import { useBookingForm } from "../store";
import StepTwo from "./step-two";

const BookTable = () => {
  const { step, setVisible, isVisible } = useBookingForm();
  return (
    <>
      <button onClick={() => setVisible(true)}>BookTable</button>
      <Modal
        isVisible={isVisible}
        onClose={() => setVisible(false)}
        className="w-lg "
      >
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
      </Modal>
    </>
  );
};

export default BookTable;
