import React, {FC, ReactNode} from 'react';
import {FlatList, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/creditsInteface';
import {MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails: FC<Props> = ({movieFull, cast}) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{color: '#000'}}> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5, color: '#000'}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>

        <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {
            code: 'USD',
          })}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString() + item.credit_id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};
