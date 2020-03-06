import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ScrollView, Text, StyleSheet } from 'react-native';

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

  return (
    <ScrollView style={styles.testContainer}>
      {data.trails.map(({ id, title }) => (
        <Text>
          {id}: {title}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    backgroundColor: 'white',
    paddingLeft: 10
  }
});

export default Test;
