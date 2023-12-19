import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  initialState,
  retrieveUser,
} from "../../../../store/reduxSlice/userSlice/userSlice";

const useDeleteAccount = () => {
  const dispatch = useDispatch();

  const deleteAccount = useCallback(() => {
    dispatch(retrieveUser(initialState));
  }, [dispatch]);
  return deleteAccount;
};
export default useDeleteAccount;
