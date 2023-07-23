import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/dummy-data';
import MealItem from '../../components/MealItem';
import { useEffect } from 'react';

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, []);

  function handlePress(mealId) {
    navigation.navigate('MealDetails', { mealId });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            onPress={() => handlePress(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
