import React from 'react';
import styled from "styled-components";

import {MainContainer} from "components/MainContainer";
import {MainPosts} from "components/MainPosts";
import {FlexWrapper} from "components/FlexWrapper";

export const Post = () => {
	return (
		<StyledPosts>
			<MainPosts title={'Recent posts'} text={'View all'}/>
			<FlexWrapper>
				<MainContainer title={'Making a design system from scratch'} content={'12 Feb 2020  |  Design, Pattern'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
				<MainContainer title={'Creating pixel perfect icons in Figma'} content={'12 Feb 2020  |  Figma, Icon Design'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
			</FlexWrapper>
		</StyledPosts>
	);
};


const StyledPosts = styled.div`
  background-color: #537255;
  min-height: 100vh;
`


