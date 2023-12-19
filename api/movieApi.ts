import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EnumBaseUrl } from "../constants/enumBaseUrl";
import { IGetMoviesRes, IGetMovieDetails, IGetSearch } from "../interface";
import { EnumKeys } from "../constants/enumKeys";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${EnumBaseUrl.BASE}`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${EnumKeys.KEY}`);
      headers.set("accept", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getMoviesByUpcoming: builder.query<IGetMoviesRes, number>({
      query: (page) => `movie/upcoming?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, response) => ({
        page: response.page,
        results: [...currentCache.results, ...response.results],
        total_pages: response.total_pages,
        total_results: response.total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMoviesByRated: builder.query<IGetMoviesRes, number>({
      query: (page) => `movie/top_rated?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, response) => ({
        page: response.page,
        results: [...currentCache.results, ...response.results],
        total_pages: response.total_pages,
        total_results: response.total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMoviesByPlaying: builder.query<IGetMoviesRes, number>({
      query: (page) => `movie/now_playing?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, response) => ({
        page: response.page,
        results: [...currentCache.results, ...response.results],
        total_pages: response.total_pages,
        total_results: response.total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMoviesByPopular: builder.query<IGetMoviesRes, number>({
      query: (page) => `movie/popular?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, response) => ({
        page: response.page,
        results: [...currentCache.results, ...response.results],
        total_pages: response.total_pages,
        total_results: response.total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getIdParams: builder.query<IGetMovieDetails, string>({
      query: (movieId) => `movie/${movieId}?append_to_response=videos`,
    }),
    getSearchMovie: builder.query<IGetSearch, { search: string; page: number }>(
      {
        query: ({ search, page }) =>
          `search/movie?query=${search}&include_adult=false&page=${page}`,
      },
    ),
  }),
});

export const {
  useGetMoviesByUpcomingQuery,
  useGetIdParamsQuery,
  useGetSearchMovieQuery,
  useGetMoviesByRatedQuery,
  useGetMoviesByPlayingQuery,
  useGetMoviesByPopularQuery,
} = movieApi;
