import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IFormValuesChangePassword } from "../../../../../interface/IFormValuesChangePassword";
import { changePassword } from "../../../../../store/reduxSlice/userSlice/userSlice";
import { IChangePasswordProps } from "../../../../../interface";

const useHandleOnSubmitChange = ({ closeModal }: IChangePasswordProps) => {
  const dispatch = useDispatch();

  const handleOnSubmitChange = useCallback(
    (values: IFormValuesChangePassword) => {
      closeModal();
      dispatch(changePassword(values.confirmPassword));
    },
    [closeModal, dispatch],
  );
  return handleOnSubmitChange;
};
export default useHandleOnSubmitChange;
