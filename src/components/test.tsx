import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { View, Text } from 'react-native';

const test = gql`
  {
    trails {
      id
      title
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(test);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  return data.trails.map(({ id, title }) => (
    <View key={id}>
      <Text>
        {id}: {title}
      </Text>
    </View>
  ));
};

export default Test;
