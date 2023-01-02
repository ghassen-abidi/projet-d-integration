import { useQuery } from "react-query";
import { getClient } from "../rq";

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
