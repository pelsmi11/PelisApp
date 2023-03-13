import React, {useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
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
import {useScreenDimensions} from '../hooks/useScreenDimensions';
import {GradientBackground} from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import {getImageColors} from '../helpers/getColors';
import {useGradient} from '../hooks/useGradient';

export const HomeScreen = () => {
  const {width: windowWidth} = Dimensions.get('window');
  // const {width: widthDisplay} = useWindowDimensions(0);
  const {width} = useScreenDimensions();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useGradient();

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    const [primary = 'transparent', secondary = 'transparent'] =
      await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* carrousel principal */}
          <View style={{height: 440}}>
            {/* <Text style={{color: '#000'}}>{windowWidth}</Text> */}
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              style={{backgroundColor: 'red'}}
              vertical={false}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* peliculas populares */}
          <HorizontalSlider movies={popular} title="Populares" />
          <HorizontalSlider movies={topRated} title="Top Rated" />
          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
