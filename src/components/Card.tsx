import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

interface CardProps {
  id?: string;
  imageSource: string;
  title: string;
  length: string;
}

const Card = (props: CardProps) => {
  const { id, imageSource, title, length } = props;

  return (
    <View key={id}>
      <View style={styles.cardContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.lengthStyle}>{length}</Text>
        <Image source={{ uri: imageSource }} style={styles.imageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    // alignItems: 'center',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 10
  },
  titleStyle: {
    fontSize: 20,
    letterSpacing: 1,
    marginBottom: 5
  },
  lengthStyle: {
    top: 5
  },
  imageStyle: {
    width: 90,
    height: 90,
    marginTop: -56,
    borderRadius: 4,
    alignSelf: 'flex-end',
    position: 'relative'
  }
});

export default Card;
