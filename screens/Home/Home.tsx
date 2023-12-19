import {
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import ListCard from "../../components/ListCard/ListCard";
import { useMemo, useState } from "react";
import {
  useGetMoviesByPlayingQuery,
  useGetMoviesByPopularQuery,
  useGetMoviesByRatedQuery,
  useGetMoviesByUpcomingQuery,
} from "../../api/movieApi";
import BannerAnimation from "../../components/BannerAnimation/BannerAnimation";

const Home = () => {
  const [pageUpComing, setPageUpComing] = useState(1);
  const [pageRated, setPageRated] = useState(1);
  const [pageNowPlaying, setPageNowPlaying] = useState(1);
  const [pagePopular, setPagePopular] = useState(1);

  const {
    data: upComing,
    isFetching: isUpComingFetching,
    isLoading: isUpComingLoading,
  } = useGetMoviesByUpcomingQuery(pageUpComing);
  const {
    data: rated,
    isFetching: isRatedFetching,
    isLoading: isRatedLoading,
  } = useGetMoviesByRatedQuery(pageRated);
  const {
    data: nowPlaying,
    isFetching: isNowPlayingFetching,
    isLoading: isNowPlayingLoading,
  } = useGetMoviesByPlayingQuery(pageNowPlaying);
  const {
    data: popular,
    isFetching: isPopularFetching,
    isLoading: isPopularLoading,
  } = useGetMoviesByPopularQuery(pagePopular);

  const renderList = useMemo(() => {
    if (
      isPopularLoading ||
      isRatedLoading ||
      isNowPlayingLoading ||
      isUpComingLoading
    ) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#e50914" />
        </View>
      );
    }
    return (
      <>
        <ListCard
          title="Up coming"
          movies={upComing?.results}
          isFetching={isUpComingFetching}
          page={pageUpComing}
          setPage={setPageUpComing}
        />
        <ListCard
          title="Top rated"
          movies={rated?.results}
          isFetching={isRatedFetching}
          page={pageRated}
          setPage={setPageRated}
        />
        <ListCard
          title="Now playing"
          movies={nowPlaying?.results}
          isFetching={isNowPlayingFetching}
          page={pageNowPlaying}
          setPage={setPageNowPlaying}
        />
        <ListCard
          title="Popular"
          movies={popular?.results}
          isFetching={isPopularFetching}
          page={pagePopular}
          setPage={setPagePopular}
        />
      </>
    );
  }, [
    isNowPlayingFetching,
    isNowPlayingLoading,
    isPopularFetching,
    isPopularLoading,
    isRatedFetching,
    isRatedLoading,
    isUpComingFetching,
    isUpComingLoading,
    nowPlaying?.results,
    pageNowPlaying,
    pagePopular,
    pageRated,
    pageUpComing,
    popular?.results,
    rated?.results,
    upComing?.results,
  ]);

  return (
    <SafeAreaView>
      <ScrollView>
        <BannerAnimation />
        {renderList}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Home;
