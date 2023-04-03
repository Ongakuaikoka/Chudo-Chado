import React from 'react';
import { Wrapper, Container, YandexMap, Text, Bird } from '../css/MapElements';
import {ReactComponent as BigBird} from '../logos/big_bird.svg';


const Map = () => {
  return (
    <Wrapper>
      <h1>Как добраться</h1>
      <Container>
        <YandexMap>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb2368124e82d8f581d6cf6b319c7279dc72be793e56f34b20847a61acef6298&amp;source=constructor"></iframe>
        </YandexMap>
        <Text>
          <p><strong>Адрес:</strong> ул. Зорге, 183, Затулинский ж/м, Новосибирск</p>
          <p><strong>Телефон:</strong> 214-24-86</p>
          <Bird>
            <BigBird />
          </Bird>
        </Text>
        
      </Container>
    </Wrapper>
  );
};

export default Map;