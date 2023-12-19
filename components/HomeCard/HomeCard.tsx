import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { IMovieCardProps, StackNavigationType } from "../../interface";
import { EnumBaseUrl } from "../../constants/enumBaseUrl";
import { EnumSizeImage } from "../../constants/enumSizeImage";
import { useNavigation } from "@react-navigation/native";
import { EnumRoutes } from "../../constants/enumRoutes";
import { StackNavigationProp } from "@react-navigation/stack";

const HomeCard = ({ item }: IMovieCardProps) => {
  const imgPath = `${EnumBaseUrl.BASE_IMG}${EnumSizeImage.IMG_500}${item.poster_path}`;
  const navigation = useNavigation<StackNavigationProp<StackNavigationType>>();

  return (
    <View style={{ padding: 10 }}>
      <Card
        onPress={() =>
          navigation.navigate(EnumRoutes.DETAILS, { movieId: item.id })
        }
        style={{ width: 130, height: 190 }}
      >
        <Card.Cover source={{ uri: imgPath }} style={{ borderRadius: 0 }} />
      </Card>
    </View>
  );
};
export default HomeCard;
