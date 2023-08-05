import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/constants';
const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    marginBottom: 2,
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.large,
  },
  supplier: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  price: {
    marginBottom: 2,
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.small,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
