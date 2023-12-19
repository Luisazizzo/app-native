import React, { memo } from "react";
import { FlatList, View } from "react-native";
import { IListCardProps } from "../../interface";
import HomeCard from "../HomeCard/HomeCard";
import { Text } from "react-native-paper";
import useFetching from "../../screens/Home/hook/useFetching";

const ListCard = ({
  movies,
  page,
  title,
  setPage,
  isFetching,
}: IListCardProps) => {
  const handleLoadMore = useFetching(isFetching, page, setPage);

  return (
    <View>
      <Text style={{ padding: 10, fontWeight: "bold", fontSize: 18 }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HomeCard item={item} />}
        horizontal={true}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default memo(ListCard);
