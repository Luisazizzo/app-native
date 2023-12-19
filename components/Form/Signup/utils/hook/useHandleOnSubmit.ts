import { useCallback } from "react";
import { IFormValuesSignup } from "../../../../../interface";
import { useDispatch } from "react-redux";
import { retrieveUser } from "../../../../../store/reduxSlice/userSlice/userSlice";

const useHandleOnSubmit = () => {
  const dispatch = useDispatch();

  const handleonSubmit = useCallback(
    ({ username, email, password }: IFormValuesSignup) => {
      const user = {
        username,
        email,
        password,
        isLogged: true,
      };
      dispatch(retrieveUser(user));
    },

    [dispatch],
  );
  return handleonSubmit;
};
export default useHandleOnSubmit;
