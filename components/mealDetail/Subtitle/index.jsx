import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});