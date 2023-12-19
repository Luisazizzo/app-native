import { Dispatch, useCallback } from "react";

const useToggleModalDelete = (
  setIsModalDelete: Dispatch<React.SetStateAction<boolean>>,
) => {
  const openModalDelete = useCallback(() => {
    setIsModalDelete(true);
  }, [setIsModalDelete]);

  const closeModalDelete = useCallback(() => {
    setIsModalDelete(false);
  }, [setIsModalDelete]);
  return { closeModalDelete, openModalDelete };
};
export default useToggleModalDelete;
