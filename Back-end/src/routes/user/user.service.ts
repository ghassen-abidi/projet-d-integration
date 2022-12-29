export const login = (email: string, password: string) => {
  return "Bearer " + email + password;
};
