import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import { createStackNavigator } from '@react-navigation/stack';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import { AppParamList, HomeStackNavProps } from '../navigation/AppParamList';

const Stack = createStackNavigator<AppParamList>();

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

const TrailScreen = ({ navigation }: HomeStackNavProps<'Trail'>) => {
  const { loading, error, data } = useQuery(trail);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  return (
    <ScrollView style={styles.trailContainer}>
      {data.trails.map(({ id, title, length, parkImage }) => (
        <TouchableOpacity
          key={id}
          style={styles.trailCardContainer}
          // onPress={() => navigation.navigate('Trail')}
        >
          <Card
            id={id}
            title={title}
            length={`Length: ${length}`}
            imageSource={parkImage.url}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
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

export default TrailScreen;
