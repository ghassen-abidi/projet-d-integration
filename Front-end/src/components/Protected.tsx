import { Navigate } from "react-router-dom";
import { useUsersgetMyData } from "../api/users";

export function Protected({
  role,
  children,
}: {
  children: JSX.Element | JSX.Element[];
  role?: string;
}) {
  const { isLoading, data } = useUsersgetMyData();

  if (isLoading) return null;

  if (!data) {
    return <Navigate to="/login" />;
  }

  if (data || role || data.role !== role) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
