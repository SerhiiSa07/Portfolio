import React from 'react';
import styled from "styled-components";
import {Container} from "components/Container";

type WorkPropsType = {
	src: string
	title: string
	yea: string
	text: string

}

export const Work = (props: WorkPropsType) => {
	return (
		<Container>
		<WorkContainer>
			<Image src={props.src} alt=''/>
			<WorkContent>
				<WorksTitle>{props.title}</WorksTitle>
				<WorksYea>{props.yea}</WorksYea>
				<WorksText>{props.text}</WorksText>
			</WorkContent>
		</WorkContainer>
		</Container>
	)
};

const WorkContainer = styled.section`
  background-color: #74557e;
  display: flex;
  justify-content: space-between;
`

const Image = styled.img`
  border-radius: 20px;
  padding-right: 18px;
  padding-bottom: 30px;
`

const WorkContent = styled.section`
  
`

const WorksTitle = styled.h2`
  
`

const WorksYea = styled.h3`
  
`

const WorksText = styled.section`
  
`