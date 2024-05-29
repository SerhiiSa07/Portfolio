import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/596207.jpg'
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align={'center'} justify={'space-between'}>
					<StyledContent>
						<Name>
							Serhii
							is a
							front-end developer
						</Name>
						<SmallText></SmallText>
						<MainTitle></MainTitle>
					</StyledContent>
					<Photo src={photo} alt=''/>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};


const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #2d2929;
  display: flex;
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
  font-size: 32px;
  font-weight: 600;
`
const Name = styled.h2`
 
  

`
const SmallText = styled.h2`
 
`