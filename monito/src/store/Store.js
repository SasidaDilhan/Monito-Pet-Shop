import { create } from "zustand";

export const useCustomers = create((set) => ({
  customer: [],
  setCustomer: (customer) => set({ customer }),
}));
