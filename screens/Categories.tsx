import * as React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGrid from "../components/CategoryGrid";

interface ICategoriesProps {
  navigation: any;
}
interface IcategoryItem {
  id: string;
  title: string;
  color: string;
}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  const { navigation } = props;

  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate("Meals Overview", {
      categoryId: categoryId,
    });
  };
  const renderCategoryItem = ({ item }: ListRenderItemInfo<IcategoryItem>) => {
    return (
      <CategoryGrid
        title={item?.title}
        color={item?.color}
        onPress={() => handleCategoryPress(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default Categories;
