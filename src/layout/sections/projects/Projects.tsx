import React from 'react';
import styled from "styled-components";
import ChertNodes from '../../../assets/images/ChertNodes.jpg'
import ProtectX from '../../../assets/images/Protect_X.jpg'
import Kahoot from '../../../assets/images/Kahoot.jpg'
import {Project} from "layout/sections/projects/Project";
import {Container} from "components/Container";
import {theme} from "styles/Theme";


export const Projects = () => {
	return (
		<Container>
			<ProjectHeader><span>projects</span></ProjectHeader>
			<ProjectContainer>
				<Project src={ChertNodes} title={'HTML SCSS Python Flask'} name={'ChertNodes'}
						 text={'Minecraft servers hosting'} button_1={'Live <~>'} button_2={'Cached >='}/>
				<Project src={ProtectX} title={'React Express Discord.js Node.js'} name={'ProtectX'}
						 text={'Discord anti-crash bot'} button_1={'Live <~>'}/>
				<Project src={Kahoot} title={'CSS Express Node.js'} name={'Kahoot Answers Viewer'}
						 text={'Get answers to your kahoot quiz'} button_1={'Live <~>'}/>
			</ProjectContainer>
		</Container>
	);
};

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  @media (max-width: 1135px){
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ProjectHeader = styled.h1`
  font-family: 'Fira Code', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 41.98px;
  text-align: left;
  margin-left: 30px;


  span{
    position: relative;

    &::before{
      content: '';
      margin-left: 180px;
      margin-bottom: 20px;
      width: 511px;
      height: 1px;
      background-color: ${theme.colors.accept};

      position: absolute;
      bottom: 0;
    }
  }
`