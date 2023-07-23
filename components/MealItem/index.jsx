import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from '../MealDetails';

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: { height: 2, width: 0 },
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
