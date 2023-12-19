import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logUser } from "../../../store/reduxSlice/userSlice/userSlice";

const useLogOut = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logUser(false));
  }, [dispatch]);
  return logOut;
};
export default useLogOut;
