import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Card from './Card';

const trail = gql`
  {
    trails {
      id
      title
      length
      parkImage {
        url
      }
    }
  }
`;

const Trail = () => {
  const { loading, error, data } = useQuery(trail);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  return (
    <View style={styles.trailContainer}>
      {data.trails.map(({ id, title, length, parkImage }) => (
        <TouchableOpacity key={id} style={styles.trailCardContainer}>
          <Card
            id={id}
            title={title}
            length={length}
            imageSource={parkImage.url}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
// imageSource={image.url}
const styles = StyleSheet.create({
  trailContainer: {
    backgroundColor: 'white',
    paddingLeft: 10
  },
  trailCardContainer: {
    marginRight: 10,
    marginBottom: 10
  }
});

export default Trail;
