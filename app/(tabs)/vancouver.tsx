import { View, Image, StyleSheet, Dimensions } from 'react-native';
import CityLink from '../../components/city_link';
import CityInfo from '../../components/city_info';

export default function Vancouver() {

  const cityInfo = "Vancouver Is Called the “Hollywood of the North” and the cosmetic treatment Botox was invented in Vancouver";

  return (
    <View>
      <Image source={require('../../assets/vancouver.jpeg')} style={styles.img} />
      <CityLink url="https://vancouver.ca/" />
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
