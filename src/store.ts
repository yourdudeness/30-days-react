import { create } from "zustand";

interface BookingFormState {
  step: number;
  data: {
    name: string;
    phone: string;
    numberOfPeople: number;
    reservationDate: Date | undefined;
    reservationTime: Date;
  };
  isVisible: boolean;
  setVisible: (condition: boolean) => void;
  setField: <K extends keyof BookingFormState["data"]>(
    key: K,
    value: BookingFormState["data"][K],
  ) => void;
  setFields: (fields: Partial<BookingFormState["data"]>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const initialData: BookingFormState["data"] = {
  name: "",
  phone: "",
  numberOfPeople: 1,
  reservationDate: new Date(),
  reservationTime: new Date(0, 0, 0, 12, 0, 0),
};

export const useBookingForm = create<BookingFormState>((set) => ({
  step: 1,
  data: initialData,
  isVisible: false,
  setVisible: (condition) => set({ isVisible: condition }),
  setField: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),
  setFields: (fields) =>
    set((state) => ({ data: { ...state.data, ...fields } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  reset: () => set({ step: 1, data: initialData, isVisible: false }),
}));
