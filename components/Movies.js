import React,{useState} from 'react';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import {useSpring, animated, useSprings} from 'react-spring'

import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px 0;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px 10px;
`;
const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`;

const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
`;

const MovieCard = styled.View`
  padding-right: 9px;
`;

const AnimatedMoviePoster = animated(MoviePoster);

const Movies = ({label, data}) => {

  const [pressed, setPressed] =  useState(null)

  const translate = useSpring({ to: {scale: 1.1}, from: {scale: 1}})
  // const springs = useSprings(4, items.map((element,index) => ({to: {opacity: 0}, from: {opacity: 1}, delay: index * 2000, config: {duration: 4000}})))
  // style={springs[index]}
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {data.map((movie, index) => {
          return (
            <MovieCard key={String(index)}>
              <TouchableWithoutFeedback onPressIn={() => {setPressed(index)}} onPressOut={() => {setPressed(null)}}>
                <AnimatedMoviePoster style={pressed === index ? {transform: [translate]} : null} resizeMode="cover" source={{uri: movie.Poster}} />
              </TouchableWithoutFeedback>
            </MovieCard>
          );
        })}
      </MovieScroll>
    </Container>
  );
};

export default Movies;
