import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/596207.jpg'
import {FlexWrapper} from "components/FlexWrapper";

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper align={'center'} justify={'space-around'}>
				<StyledContent>
	             <span>
		               Welcome
	             </span>
					<Name>I’m Serhii Salohub</Name>
					<MainTitle>A Frontend</MainTitle>
				</StyledContent>
				<Photo src={photo} alt=''/>
			</FlexWrapper>
		</StyledMain>
	);
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #2d2929;
`

const StyledContent = styled.div`
	color: #ffffff;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
 
`
const Name = styled.h1`
 
`