import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../assets/constants';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Poppins Bold',
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontFamily: 'Poppins SemiBold',
    fontSFize: SIZES.medium,
    color: COLORS.gray,
  },
  cutCount: {
    position: 'absolute',
    bottom: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    zIndex: 9999,
  },
  cutNumber: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});

export default styles;
