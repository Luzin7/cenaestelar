import { UserProps } from "@/types/user";
import { UserInfo } from "firebase/auth";
import { create } from "zustand";

type User = Omit<UserInfo, "providerId">;

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
      displayName: "",
      email: "",
      phoneNumber: "",
      photoURL: "",
      uid: "",
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
