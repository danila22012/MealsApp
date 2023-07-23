import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTitle from '../../components/CategoryGridTitle';

export default function CategoriesScreen({ navigation }) {
  function pressHandler(itemData) {
    navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id,
    });
  }
  return (
    <FlatList
      data={CATEGORIES}
      style={styles.screen}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(itemData) => (
        <CategoryGridTitle
          color={itemData.item.color}
          title={itemData.item.title}
          onPress={() => pressHandler(itemData)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
