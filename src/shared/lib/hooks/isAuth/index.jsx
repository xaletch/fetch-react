import { useContext } from "react";
import { AuthContext } from "../../../../app/providers"

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth not context');
  }

  return context;
}