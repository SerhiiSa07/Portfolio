import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";

type ProjectPropsType = {
	src: string
	title: string
	name: string
	text: string
	button_1: string
	button_2?: string

}

export const Project = (props: ProjectPropsType) => {
	return (
			<ProjectWrapper>
				<ProjectContent>
					<ProjectImage src={props.src} alt=''/>
					<ProjectTitle>{props.title}</ProjectTitle>
					<ProjectName>{props.name}</ProjectName>
					<ProjectText>{props.text}</ProjectText>

					<ButtonContainer>
						<ButtonOne>{props.button_1}</ButtonOne>
						<ButtonTwo>{props.button_2}</ButtonTwo>
					</ButtonContainer>

				</ProjectContent>
				<div></div>
				<div></div>
			</ProjectWrapper>
	);
};

const ProjectWrapper = styled.div`

  
`
const ProjectContent = styled.div`
  background-color: #594e52;
  margin: 20px;
`

const ProjectImage = styled.img`
  width: 330px;
  height: 201px;
`

const ProjectTitle = styled.h2`
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 8px;
  margin-left: 8px;
`

const ProjectName = styled.h1`
  font-family: 'Fira Code', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 31.49px;
  text-align: left;
  margin-bottom: 8px;
  margin-left: 16px;
`

const ProjectText = styled.h3`

  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.99px;
  text-align: left;
  margin-bottom: 8px;
  margin-left: 16px;
`

const ButtonContainer = styled.div`
display: flex;
  gap: 30px;
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.99px;
  text-align: center;
  margin-left: 32px;
  
`

const ButtonOne = styled.div`
border: 2px solid ${theme.colors.accept};
padding: 5px;
`

const ButtonTwo = styled.span`
  border: 2px solid ${theme.colors.font};
  padding: 5px;
`