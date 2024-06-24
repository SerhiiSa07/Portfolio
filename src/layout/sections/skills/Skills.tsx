import React from 'react';
import styled from "styled-components";
import SkillsImg from 'assets/images/Group 36.svg'
import {SkillContent} from "layout/sections/skills/SkillContent";
import {Container} from "components/Container";
import {theme} from "styles/Theme";

export const Skills = () => {
	return (
		<SkillsWrapper id={'skills'}>
			<Container>
		<SkillsHeader><span>skills</span></SkillsHeader>
			<SkillsContainer>
				<PhotoSVG>
					<PhotoSkills src={SkillsImg} alt=''/>
				</PhotoSVG>
				<ContentContainer>
					<SkillContent name={'Languages'} title={'TypeScript Lua'} text={'Python JavaScript'}/>
					<SkillContent name={'Databases'} title={'SQLite PostgreSQL'} text={'Mongo'}/>
					<SkillContent name={'Tools'} title={'VSCode Neovim Linux'} text={'Figma XFCE Arch'} doubleText={'Git Font Awesome'}/>
					<SkillContent name={'Other'} title={'HTML CSS EJS SCSS'} text={'REST Jinja'}/>
					<SkillContent name={'Frameworks'} title={'React Vue'} text={'Disnake Discord.js'} doubleText={'Flask Express.js'}/>
				</ContentContainer>
			</SkillsContainer>
				</Container>
		</SkillsWrapper>
	);
};

const SkillsWrapper = styled.section`
  position: relative;
  /*width: 1024px;
  height: 365px;*/
  

`

const SkillsHeader = styled.h1`
  font-family: 'Fira Code', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 41.98px;
  text-align: left;
  padding-top: 100px;
  margin-left: 30px;

  span{
    position: relative;

    &::before{
      content: '';
      margin-left: 130px;
      margin-bottom: 20px;
      width: 239px;
      height: 1px;
      background-color: ${theme.colors.accept};

      position: absolute;
      bottom: 0;
    }
  }
`

const SkillsContainer = styled.h1`
  display: flex;
  gap: 30px;
  padding: 32px 20px 20px 32px;
`

const PhotoSVG = styled.div`
  position: relative;
  padding-right: 30px;
`

const PhotoSkills = styled.img`
  width: 349px;
  height: 282px;
  object-fit: cover;
`

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-left: 30px;
  
`