import { create } from "zustand";
import { persist, createJSONStorage, PersistStorage } from "zustand/middleware";

type StoreType = {
  currGroup: string;
  setCurrGroup: (currGroup: string) => void;
  currOrder: string;
  setCurrOrder: (order: string) => void;
  data: any;
  setData: (data: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const useStore = create<StoreType>()(
  persist(
    (set) => ({
      currGroup: "status",
      setCurrGroup: (currGroup: string) => set({ currGroup }),
      currOrder: "title",
      setCurrOrder: (order: string) => set({ currOrder: order }),
      data: {},
      setData: (data: any) => set({ data }),
      loading: false,
      setLoading: (loading: boolean) => set({ loading }),
    }),
    {
      name: "store",
      storage: createJSONStorage(
        () => localStorage
      ) as PersistStorage<StoreType>,
    }
  )
);

export default useStore;
