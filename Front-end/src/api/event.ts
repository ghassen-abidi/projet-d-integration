import { useQuery, useMutation } from "react-query";
import { getClient } from "../rq";

export const useUsersgetAll = () => {
  return useQuery("users", () =>
    getClient()
      .get("/event/all")
      .then((res) => res.data)
  );
};

export const useEventUnchcked = () => {
  return useQuery("users", () =>
    getClient()
      .get("/event/unchecked")
      .then((res) => res.data)
  );
};

export const useGetEventById = (id) => {
  return useQuery("users", () =>
    getClient()
      .get("/event/" + id)
      .then((res) => res.data)
  );
};

export const useGetAllEvent = () => {
  return useQuery("users", () =>
    getClient()
      .get("/event/getAllEvent")
      .then((res) => res.data)
  );
};
