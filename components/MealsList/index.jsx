import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../MealItem';
import { useNavigation } from '@react-navigation/native';

export default function MealsList({ items }) {
  const navigation = useNavigation();

  function handlePress(mealId) {
    navigation.navigate('MealDetails', { mealId });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
