import { Dispatch } from "react";
import { Movies } from "./IMovie";

export interface IListCardProps {
  movies?: Movies;
  //handleLoadMore: () => void;
  title: string;
  isFetching: boolean;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}
