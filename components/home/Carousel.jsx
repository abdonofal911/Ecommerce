import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../assets/constants';
import {SliderBox} from 'react-native-image-slider-box';

const Carousel = () => {
  const slides = [
    'https://www.ikea.com/eg/en/images/products/hauga-bedroom-furniture-set-of-4-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s',
    'https://www.ikea.com/eg/en/images/products/hauga-bedroom-furniture-set-of-4-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s',
    'https://www.ikea.com/eg/en/images/products/gursken-bedroom-furniture-set-of-3-light-beige__1063816_ph182868_s5.jpg?f=s',
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 15}}
        autoplay
        circleLoop
      />
    </View>
  );F
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
