import { Dispatch, useCallback } from "react";

const useFetching = (
  isFetching: boolean,
  page: number,
  setPage: Dispatch<React.SetStateAction<number>>,
) => {
  const handleLoadMore = useCallback(() => {
    if (!isFetching) {
      setPage(page + 1);
    }
  }, [isFetching, page, setPage]);
  return handleLoadMore;
};
export default useFetching;
