import React from 'react';
import {COLORS, SIZES} from '../assets/constants';

import {View, TouchableOpacity, Image} from 'react-native';
import styles from './ProductDetails.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: 'https://www.ikea.com/eg/en/images/products/hauga-bedroom-furniture-set-of-4-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ProductDetails;
