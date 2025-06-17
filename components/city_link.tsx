import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function CityLink({ url }: { url: string }) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Text style={styles.link}>
        Go to city page
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue', 
    fontSize: 16, 
    margin: 10
  }
});