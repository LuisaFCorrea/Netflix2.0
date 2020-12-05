import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

import {StatusBar, Dimensions} from 'react-native';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';

const api = [
  require('../assets/movie1.jpg'),
  require('../assets/movie2.jpg'),
  require('../assets/movie3.jpg'),
  require('../assets/movie4.jpg'),
];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;



/**
 * Utilizando a biblioteca react-spring
 * Anime o componente Post para que ele desapareça assim que essa tela for construida.
 * Leve a opacidade dele de 1 para 0 em 3 segundos.
 */

const Home = (props) => {
  console.log('props', JSON.stringify(props));

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = require('../assets/Movies.json')
    setMovies(data)
  }, [])

  const onObtainPosition = (position) => {  
     console.log('position', position)
     const pos = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
      Geocoder.geocodePosition(pos).then(res => {
          console.log(res)
    })
  }

  Geolocation.getCurrentPosition(onObtainPosition, error => console.error(error));


  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
            <Header />
            <Hero />
        </Poster>
        <Movies label={`Continuar assistindo`} 
          data={movies}
        />
        <Movies label="Nacionais" data={movies} />
        <Movies label="Recomendados" data={movies} />
        <Movies label="Top 10" data={movies} />
      </Container>
    </>
    
  );
};

export default Home;
