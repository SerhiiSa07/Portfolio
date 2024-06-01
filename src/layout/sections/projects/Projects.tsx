import React from 'react';
import styled from "styled-components";
import ChertNodes from '../../../assets/images/ChertNodes.jpg'
import ProtectX from '../../../assets/images/Protect_X.jpg'
import Kahoot from '../../../assets/images/Kahoot.jpg'
import {Project} from "layout/sections/projects/Project";
import {Container} from "components/Container";


export const Projects = () => {
	return (
		<Container>
			<ProjectHeader>projects</ProjectHeader>
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

const ProjectHeader = styled.div`
  font-family: 'Fira Code', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 41.98px;
  text-align: left;
  margin-left: 30px;
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`