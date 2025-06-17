import { Text, TouchableOpacity, Linking } from 'react-native';

export default function CityLink({ cityName, url }: { cityName: string; url: string }) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Text style={{ color: 'blue', fontSize: 16, marginTop: 10 }}>
        Go to city page
      </Text>
    </TouchableOpacity>
  );
}
