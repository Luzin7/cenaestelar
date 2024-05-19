import { UserInfo } from 'firebase/auth'
import { create } from 'zustand'

type User = Omit<UserInfo, 'providerId'> & {
  isLoggedIn: boolean
}

type ActionsProps = {
  updateUser: (update: Partial<UserInfo>) => void
}

interface StoreProps {
  userState: {
    user: User
  }
  actions: ActionsProps
}

export const useUserStore = create<StoreProps>((set) => ({
  userState: {
    user: {
      displayName: '',
      email: '',
      phoneNumber: '',
      photoURL: '',
      uid: '',
      isLoggedIn: false,
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
}))
