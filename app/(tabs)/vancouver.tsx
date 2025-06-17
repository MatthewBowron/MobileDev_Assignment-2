import { View, Text, Image } from 'react-native';
import CityLink from '../../components/city_link';
import CityInfo from '../../components/city_info';

export default function Vancouver() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30 }}>Vancouver</Text>
      <Image source={require('../../assets/vancouver.jpeg')} style={{ height: 400, width:600, marginTop: 20 }} />
      <CityLink cityName="Vancouver" url="https://vancouver.ca/" />
      <CityInfo city="Vancouver" />
    </View>
  );
}
