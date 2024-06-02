import React from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";

export const Footer = () => {
	return (
		<StyledFooter>
			<Name>Serhii</Name>
			<SocialIconLink>
				<Icon iconId={'fb'}/>
				<Icon iconId={'linkedin'}/>
				<Icon iconId={'twitter'}/>
				<Icon iconId={'linkedin'}/>
			</SocialIconLink>
			<Copyright> Copyright ©2020 All rights reserved </Copyright>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
  background-color: #693737;
  min-height: 20vh;
  align-content: center;
  text-align: center;

`
const Name = styled.h2`
padding-bottom: 20px;
`

const SocialIconLink = styled.footer`

`

const Copyright = styled.h3`

`