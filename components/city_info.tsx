import { Text, StyleSheet } from 'react-native';

export default function CityInfo({ text }: { text: string }) {

  return (
    <Text style={styles.text}>
      {text || "Interesting facts coming soon!"}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginHorizontal: 20, 
    fontSize: 14,
    lineHeight: 25,
  }
});
