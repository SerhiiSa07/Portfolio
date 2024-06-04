import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";
import dek from	'../../../assets/images/Group_Currrently.svg'
import {font} from "styles/Common";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align={'center'} justify={'space-between'} >
					<StyledContent>
						<Name>
							<span>Serhii</span> is a
							front-end developer
						</Name>
						<SmallText>He crafts responsive websites where technologies meet creativity</SmallText>
						<MainTitle>Contact me!!!</MainTitle>
					</StyledContent>
					<PhotoWrapper><Photo src={dek} alt=''/><Portfolio>Currently working on Portfolio</Portfolio></PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};


const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
`

const StyledContent = styled.div`
	color: #ffffff;
  @media (max-width: 1135px){
    text-align: center;
  }
`

const PhotoWrapper = styled.div`
	position: relative;
  	z-index: 0;
  
  &::before {
	content: '';
	width: 360px;
	height: 470px;
	border: 5px solid ${theme.colors.accept};
	
	position: absolute;
	top: -24px;
	left: 24px;
	z-index: -1;
	
	@media ${theme.media.mobile}{
	  width: 314px;
	  height: 414px;
	}
  }
`

const Photo = styled.img`
  width: 477px;
  height: 386px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 316px;
    height: 260px;
  }
`

const Portfolio = styled.div`
	text-align: center;
  margin-top: 80px;
  margin-right: 60px;
`

const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

const Name = styled.h1`
  ${font({family: "'Fira Code', sans-serif", weight: 600, Fmax: 32})}
  /*font-size: 32px;
  font-weight: 600;*/
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  span{
	position: relative;
    z-index: 1;
	
    &::before{
      content: '';
      display: inline-block;
      width: 100%;
      height: 14px;
      background-color: ${theme.colors.accept};
	  
	  position: absolute;
	  bottom: 0;
	  z-index: -1;
    }
  }
`

const SmallText = styled.h1`
  color: ${theme.colors.accept};
 
`

