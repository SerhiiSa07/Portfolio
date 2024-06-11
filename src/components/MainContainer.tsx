import styled from "styled-components";
import React from 'react';

type MainContainerPropsType = {
	title: string
	content: string
	text: string
}

export const MainContainer = (props: MainContainerPropsType) => {
	return (
		<MainContainerDesign>
			<MainTitle>{props.title}</MainTitle>
			<MainContent>{props.content}</MainContent>
			<MainText>{props.text}</MainText>
		</MainContainerDesign>
	);
};


export const MainContainerDesign = styled.section`
	width: 50%;
  text-align: center;
`

export const MainTitle = styled.h2`

`

export const MainContent = styled.h4`

`
export const MainText = styled.p`

`