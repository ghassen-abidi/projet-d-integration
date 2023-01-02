import { useMutation, useQuery } from "react-query";
import { getClient } from "../rq";

export const useLogin = () => {
  return useMutation((data) => {
    return getClient()
      .post("/user/login", data)
      .then((res) => res.data);
  });
};

export const useUsersgetAll = () => {
  return useQuery("users", () =>
    getClient()
      .get("/user")
      .then((res) => res.data)
  );
};

export const useUsersgetMyData = () => {
  return useQuery("user", () =>
    getClient()
      .get("/user/me")
      .then((res) => res.data)
  );
};
