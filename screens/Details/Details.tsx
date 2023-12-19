import { useRoute } from "@react-navigation/native";
import { Text, ScrollView, View, Image } from "react-native";
import { useGetIdParamsQuery } from "../../api/movieApi";
import { DetailsIdType } from "../../interface";
import { WebView } from "react-native-webview";
import { useMemo } from "react";
import { EnumBaseUrl } from "../../constants/enumBaseUrl";
import { EnumSizeImage } from "../../constants/enumSizeImage";
import { IconButton } from "react-native-paper";
import { invertDate, invertMinutes } from "../../commons/utils/method";

const Details = () => {
  const route = useRoute();
  const { movieId } = route.params as DetailsIdType;

  const { data } = useGetIdParamsQuery(movieId);

  const imagePath = `${EnumBaseUrl.BASE_IMG}${EnumSizeImage.IMG_500}${data?.poster_path}`;

  const renderVideos = useMemo(() => {
    if (data?.videos.results[0].key) {
      return (
        <WebView
          style={{ height: 400, backgroundColor: "#141414" }}
          source={{
            uri: `https://www.youtube.com/embed/${data?.videos.results[0].key}`,
          }}
        />
      );
    }
    return <Image source={{ uri: imagePath }} />;
  }, [data?.videos.results, imagePath]);

  return (
    <ScrollView style={{ backgroundColor: "#141414" }}>
      {renderVideos}
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          {data?.genres.map(({ name, id }) => (
            <Text
              style={{ color: "#e50914", fontWeight: "bold", fontSize: 17 }}
              key={id}
            >
              {name}
            </Text>
          ))}
          <View>
            <IconButton icon="cards-heart-outline" size={30} iconColor="#fff" />
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {data?.overview}
        </Text>
        <Text style={{ color: "#fff", marginTop: 10 }}>
          - Relase: {data?.release_date && invertDate(data.release_date)}
        </Text>
        <Text style={{ color: "#fff" }}>
          - Duration: {invertMinutes(data?.runtime)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Details;
