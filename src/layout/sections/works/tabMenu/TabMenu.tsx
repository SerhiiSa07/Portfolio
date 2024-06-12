import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "styles/Theme";

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
	tabsItems: Array<{status: TabsStatusType, title: string}>
	changeFilterStatus: (value: TabsStatusType) => void
	currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.tabsItems.map((item, index) => {
					return <ListItem key={index}>
						<Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
					</ListItem>
				})}
			</ul>
		</StyledTabMenu>
	);
};


const StyledTabMenu = styled.nav`
  
 ul {
   display: flex;
   //gap: 20px;
   justify-content: space-between;
   max-width: 352px;
   width: 100%;
   border: 1px solid red;
   margin: 0 auto 40px;
 }

`

const ListItem = styled.li`
	
`

const Link = styled.a<{ active?: boolean }>`
	font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  
  &:hover {
	&::before{
	  height: 10px;
	}
  }
  
  &::before{
	content: '';
	display: inline-block;
	background-color: ${theme.colors.accept};
	
	position: absolute;
	bottom: 5px;
	left: 0;
	right: 0;
	z-index: -1;
	
	${props => props.active && css<{active?: boolean}>`
	height: 10px;
	
	
	`}
  }
`

