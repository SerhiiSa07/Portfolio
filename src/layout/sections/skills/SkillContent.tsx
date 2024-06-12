import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";

type ProjectPropsType = {
	name: string
	title: string
	text: string
	doubleText?: string
}

export const SkillContent = (props: ProjectPropsType) => {
	return (
		<SkillsContent>
			<SkillsName>{props.name}</SkillsName>
			<ContainerText>
			<SkillsTittle>{props.title}</SkillsTittle>
			<SkillsText>{props.text}</SkillsText>
			<SkillsDoubleText>{props.doubleText}</SkillsDoubleText>
			</ContainerText>
		</SkillsContent>
	);
};

const SkillsContent = styled.h3`
  
`

const SkillsName = styled.div`
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.99px;
  text-align: left;
  border: 1px solid ${theme.colors.font};
  padding: 10px;

`


const SkillsTittle = styled.div`
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.99px;
  text-align: left;
 
`

const SkillsText = styled.div`
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.99px;
  text-align: left;
`

const SkillsDoubleText = styled.div`
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.99px;
  text-align: left;
`

const ContainerText = styled.div`
  border: 1px solid ${theme.colors.font};
  padding: 10px;
`