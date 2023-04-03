import React, { useEffect } from "react";
import { Home, Background, ProgLinks, Chick, Cloud_1, Cloud_2, Bird, Button, MainText } from '../css/HomePageElements';
import '../css/HomePageElements.js';
import chick_main from '../logos/Chick_Main.png';
import big_cloud from '../logos/Big_Cloud.png';
import small_cloud from '../logos/Small_Cloud.png';
import small_bird from '../logos/Small_Bird.png';
import {ReactComponent as ChudoChadoCentre} from '../logos/chudo-chado-centre.svg';
import {ReactComponent as BigCloudSVG} from '../logos/Big_Cloud.svg';
import {ReactComponent as SmallCloudSVG} from '../logos/Small_Cloud.svg';
import CoursesSwitcher from "./CoursesSwitcher";
import AdvantagesList from "./AdvantagesList";
import Map from "./Map";

const HomePage = () => {

  useEffect(() => {
    const onPageLoad = () => {
      document.querySelector('#nav_logo').style.display = 'none';
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  window.addEventListener('scroll', function() {
    var main_logo = document.querySelector('#main_logo');
    var nav_logo = document.querySelector('#nav_logo');
    var position = main_logo.getBoundingClientRect();

    if(position.bottom <= 0 + (window.innerHeight / 15)) {
      nav_logo.style.display = 'flex';
    } else {
      nav_logo.style.display = 'none';
    }
  });

  return (
    <Home>
      {/* <h1>Welcome to the Children's Education Center!</h1>
      <p>Our center offers a variety of educational programs for children of all ages.</p> */}
      <Background>
        <Chick src={chick_main}></Chick>
        

        <Cloud_1>
          <BigCloudSVG />
        </Cloud_1>
        <Cloud_2>
          <SmallCloudSVG />
        </Cloud_2>
        <Bird src={small_bird}></Bird>
        <MainText> 
          <ChudoChadoCentre id='main_logo'/>
          <p>Мы с удовольствием поможем вашему ребёнку раскрыть свой потенциал и достичь высоких результатов в учебе и жизни!</p>
          <Button>Пробное занятие - 0₽</Button>
        </MainText>

      </Background>
      <a name="programs"></a>
      <CoursesSwitcher />
      <a name="about"></a>
      <AdvantagesList />
      <Map />
      <div style={{height: '1000px'}}></div>
    </Home>
  );
};

export default HomePage;