import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import MealDetails from '../../components/MealDetails';
import Subtitle from '../../components/mealDetail/Subtitle';
import List from '../../components/mealDetail/List';
import { ScrollView } from 'react-native-gesture-handler';
import IconButton from '../../components/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/redux/favorites';
// import { FavoritesContext } from '../../store/context/favorites-context';

export default function MealDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  // const context = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;
  const meal = MEALS.find((item) => item.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // context.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // context.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          color='#fff'
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    margin: 8,
  },
  detailText: {
    color: '#fff',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
