interface User {
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  email: string;
}

export type SetUserFn = (user: User) => void;

export function useUser(): [Ref<User>, SetUserFn] {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp.$user) {
    const user = ref({} as User);
    nuxtApp.provide("user", user);
    nuxtApp.provide("setUser", (newUSer: User) => (user.value = newUSer));
  }
  return [nuxtApp.$user as Ref<User>, nuxtApp.$setUser as SetUserFn];
}
