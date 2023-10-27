import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/dummy-data';
import MealItem from '../../components/MealItem';
import { useEffect } from 'react';
import MealsList from '../../components/MealsList';

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

  return <MealsList items={displayedMeals} />;
}
