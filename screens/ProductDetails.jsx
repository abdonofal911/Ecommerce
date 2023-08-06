import React, {useState} from 'react';
import {COLORS, SIZES} from '../assets/constants';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './ProductDetails.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1);

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
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product Name</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{99.99}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 4].map(index => (
              <Ionicons
                key={Math.random() * 100}
                name="star"
                size={24}
                color="gold"
              />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                if (count < 5) {
                  setCount(count + 1);
                }
              }}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>({count})</Text>
            <TouchableOpacity
              onPress={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionwrapper}>
          <Text style={styles.description}>description</Text>
          <Text style={styles.descText}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
