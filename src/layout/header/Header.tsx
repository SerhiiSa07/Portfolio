import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";
import {HeaderMenu} from "layout/header/headerMenu/HeaderMenu";
import {HeaderName} from "layout/header/headerName/HeaderName";
import {MobileMenu} from "layout/header/mobileMenu/MobileMenu";


export const Header = () => {

	return (

		<StyledHeader>
			<Container>
				<FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
					<FlexHeaderLogoName>
					<Logo/>
					<HeaderName/>
					</FlexHeaderLogoName>
					<HeaderMenu/>
					<MobileMenu/>
				</FlexWrapper>
			</Container>
		</StyledHeader>

	);
};

const StyledHeader = styled.header`

  background-color: black;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

const FlexHeaderLogoName = styled.div`
  
  display: flex;
  align-items: center;
  
`

