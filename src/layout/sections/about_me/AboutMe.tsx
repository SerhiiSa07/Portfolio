import React from 'react';
import styled from "styled-components";

type AboutMePropsType = {
	title: string
}

export const AboutMe = (props: AboutMePropsType) => {
	return (
			<AboutMeContainer>
					<AboutMeTitle>
						{props.title}
					</AboutMeTitle>
				</AboutMeContainer>
	);
};


const AboutMeContainer = styled.div`
  width: 515px;
  
`

const AboutMeTitle = styled.div`
  padding-bottom: 20px;
	
`

