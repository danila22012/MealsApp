// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import MealsList from '../../components/MealsList';
import { MEALS } from '../../data/dummy-data';
// import { FavoritesContext } from '../../store/context/favorites-context';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
  // const context = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>No favorite meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
