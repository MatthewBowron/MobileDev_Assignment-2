import { View, Image, StyleSheet, Dimensions } from 'react-native';
import CityLink from '../../components/city_link';
import CityInfo from '../../components/city_info';

export default function Calgary() {

  const cityInfo = "Calgary is the third most diverse major city in Canada with more than 120 languages spoken in the city and Calgary has the sunniest days all year round in Canada.";

  return (
    <View>
      <Image source={require('../../assets/calgary.jpeg')} style={styles.img} />
      
      <CityLink url="https://www.calgary.ca/home.html" />
      <CityInfo text={cityInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    height: 0.3*Dimensions.get('window').height,
    marginBottom: 10,
    resizeMode: 'stretch',
  }
});
