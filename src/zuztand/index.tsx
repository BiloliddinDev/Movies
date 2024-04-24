import { create } from "zustand";

interface searchtype {
  searchstate: string;
  searchvalue: (value: string) => void;
}

export const useSearch = create<searchtype>((set: any) => ({
  searchstate: "",
  searchvalue: (value: string) => set(() => ({ searchstate: value })),
}));
