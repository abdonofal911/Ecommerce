import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/constants';
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcometxt: (color, top) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.xxLarge - 5,
    marginTop: top,
    color: color,
    marginHorizontal: 12,
  }),
});

export default styles;
