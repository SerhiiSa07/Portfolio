import React from 'react';
import styled from "styled-components";
import {AboutMe} from "layout/sections/about_me/AboutMe";
import groupImage from "assets/images/Group_50.svg";
import {theme} from "styles/Theme";
import {Container} from "components/Container";

export const Abouts = () => {
	return (
		<Container>
		<AboutMeWrapper>
				<AboutMeContent>
				<AboutMeName><span>about-me</span></AboutMeName>
				<AboutMe title={'Hello, i’m Elias!'}/>
					<AboutMe title={'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.'}/>
					<AboutMe title={'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.'}/>
					<AboutMeButton>{'Read more ->'}</AboutMeButton>
				</AboutMeContent>
			<AboutMeImage src={groupImage} alt=''/>
		</AboutMeWrapper>
		</Container>
	);
};

const AboutMeWrapper = styled.div`
	display: flex;
  	
`

const AboutMeContent = styled.div`
 
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  padding-left: 60px;
  
`

const AboutMeName = styled.div`
  font-family: 'Fira Code', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 41.98px;
  text-align: left;
  margin-left: 30px;
  padding-top: 100px;
  padding-bottom: 30px;

  span{
    position: relative;

    &::before{
      content: '';
      margin-left: 180px;
      margin-bottom: 20px;
      width: 326px;
      height: 1px;
      background-color: ${theme.colors.accept};

      position: absolute;
      bottom: 0;
    }
  }
  
`

const AboutMeImage = styled.img`
  width: 100vh;
  height: 508px;
  
`

const AboutMeButton = styled.div`
  
  border: 1px solid ${theme.colors.accept};
  width: 162px;
  height: 37px;
  padding: 8px 16px 8px 16px;
  gap: 10px;
  margin-bottom: 20px;
  
`