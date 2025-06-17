import { View, Text, Image } from 'react-native';
import CityLink from '../../components/city_link';
import CityInfo from '../../components/city_info';

export default function Calgary() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30 }}>Calgary</Text>
      <Image source={require('../../assets/calgary.jpeg')} style={{ height: 400, width: 600, marginTop: 20 }} />
      
      <CityLink cityName="Calgary" url="https://www.calgary.ca/home.html" />
      <CityInfo city="Calgary" />
    </View>
  );
}
