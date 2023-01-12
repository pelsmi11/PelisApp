import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* carrousel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* peliculas populares */}
        <HorizontalSlider movies={popular} title="Populares" />
        <HorizontalSlider movies={topRated} title="Top Rated" />
        <HorizontalSlider movies={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
};
