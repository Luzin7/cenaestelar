import { UserProps } from "@/types/user";
import { create } from "zustand";

type User = Omit<UserProps, "email">;

type ActionsProps = {
  updateUser: (update: Partial<UserProps>) => void;
};

interface StoreProps {
  userState: {
    user: User;
  };
  actions: ActionsProps;
}

export const useUserStore = create<StoreProps>((set) => ({
  userState: {
    user: {
      name: "",
      id: "",
    },
  },
  actions: {
    updateUser: (update) =>
      set(({ userState }) => ({
        userState: {
          ...userState,
          user: {
            ...userState.user,
            ...update,
          },
        },
      })),
  },
}));
