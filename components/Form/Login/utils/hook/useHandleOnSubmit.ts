import { useDispatch } from "react-redux";
import { logUser } from "../../../../../store/reduxSlice/userSlice/userSlice";
import { useCallback } from "react";

const useHandleOnSubmit = () => {
  const dispatch = useDispatch();

  const handleonSubmit = useCallback(() => {
    dispatch(logUser(true));
  }, [dispatch]);
  return handleonSubmit;
};
export default useHandleOnSubmit;
