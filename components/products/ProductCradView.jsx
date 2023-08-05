import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './ProductCradView.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../assets/constants';
import {useNavigation} from '@react-navigation/native';

const ProductCradView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetails');
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.ikea.com/eg/en/images/products/hauga-bedroom-furniture-set-of-4-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s',
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>200$</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCradView;
