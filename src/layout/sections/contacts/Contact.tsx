import React from 'react';
import {Container} from "components/Container";
import styled from "styled-components";
import {theme} from "styles/Theme";
import discordIcon from '../../../assets/images/Discord.svg'
import emailIcon  from '../../../assets/images/Email.svg'

export const Contact = () => {
	return (
		<Container>
			<ContactWrapper>
				<ContactContainer>
					<ContactTitle><span>contacts</span></ContactTitle>
					<ContactText>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</ContactText>
				</ContactContainer>
				<ContactMessage>
					<ContactName>Message me here:</ContactName>
					<ContactDiscord><img src={discordIcon} alt="Discord" className="icon" />   StalkerDOK   </ContactDiscord>
					<ContactEmail><img src={emailIcon} alt="Email" className="icon" />    875dfsb6435278785@gmail.com
					</ContactEmail>
				</ContactMessage>
			</ContactWrapper>
		</Container>
	);
};

const ContactWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 200px;
  padding-bottom: 40px;

`

const ContactContainer = styled.div`
  width: 515px;
  padding-left: 60px;
`

const ContactTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 41.98px;
  text-align: left;
  margin-left: 30px;
  padding-bottom: 30px;

  span{
    position: relative;

    &::before{
      content: '';
      margin-left: 180px;
      margin-bottom: 20px;
      width: 127px;
      height: 1px;
      background-color: ${theme.colors.accept};

      position: absolute;
      bottom: 0;
    }
  }
  	
`

const ContactText = styled.div`
	
  	
`

const ContactMessage = styled.div`
  
  width: 340px;
  border: 1px solid ${theme.colors.font};
  padding: 20px;
`


const ContactName = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20.99px;
  text-align: left;
padding-bottom: 20px;

`


const ContactDiscord = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.99px;
  text-align: left;
  padding-bottom: 10px;

`


const ContactEmail = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.99px;
  text-align: left;


`