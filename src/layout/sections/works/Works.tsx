import React from 'react';
import styled from "styled-components";
import {PostsTitle} from "components/MainPosts";
import {Work} from "layout/sections/Work";
import designImage from '../../../assets/images/Rectangle.png'
import vibrantImage from '../../../assets/images/Rectangle_2.png'
import typographyImage from '../../../assets/images/Rectangle_3.png'
export const Works = () => {
	return (
		<StyledWorks>
			<PostsTitle>Featured works</PostsTitle>
			<Work src={designImage} title={'Designing Dashboards'} yea={'2020  Dashboard'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
			<Work src={vibrantImage} title={'Vibrant Portraits of 2020'} yea={'2020  Illustration'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
			<Work src={typographyImage} title={'36 Days of Malayalam type'} yea={'2018  Typography'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #49608a;
`



