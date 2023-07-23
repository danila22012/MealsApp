import { StyleSheet, Text, View } from 'react-native';

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.description, style]}>
      <Text style={[styles.descriptionItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.descriptionItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.descriptionItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  descriptionItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
