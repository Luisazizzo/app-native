import { Dispatch, useCallback } from "react";

const useToggleModalChange = (
  setIsModalChange: Dispatch<React.SetStateAction<boolean>>,
) => {
  const openModalChange = useCallback(() => {
    setIsModalChange(true);
  }, [setIsModalChange]);

  const closeModalChange = useCallback(() => {
    setIsModalChange(false);
  }, [setIsModalChange]);
  return { openModalChange, closeModalChange };
};
export default useToggleModalChange;
