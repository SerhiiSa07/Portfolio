import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";
import {Link} from "react-scroll";


//const items = ['Home',  'Projects', 'Skills', 'About_Me',/*'Works', 'Testimony',*/ 'Contact']


const items = [
	{
		title: 'Home',
		href: 'home'
	},
	{
		title: 'Projects',
		href: 'projects'
	},
	{
		title: 'Skills',
		href: 'skills'
	},
	{
		title: 'About_Me',
		href: 'about_me'
	},
	{
		title: 'Works',
		href: 'works'
	},
	{
		title: 'Testimony',
		href: 'testimony'
	},
	{
		title: 'Contact',
		href: 'contact'
	}
]

export const HeaderMenu: React.FC = () => {
	return (
		<StyledHeaderMenu>
			<ul>
				{items.map((item, index) => {
					return <ListItem key={index}>
						<NavLink to={item.href}
								 smooth={true}>
							{item.title}
							<Mask>
								<span>{item.title}</span>
							</Mask>
							<Mask>
								<span>{item.title}</span>
							</Mask>
						</NavLink>
					</ListItem>
				})}
			</ul>
		</StyledHeaderMenu>
	);
};


const StyledHeaderMenu = styled.nav`
	
ul{
  display: flex;
  gap: 30px;
 justify-content: center;
}
  @media ${theme.media.tablet}{
	display: none;
  }
	
`

const NavLink = styled(Link)`
	font-family: 'Fira Code', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`

const Mask = styled.span`
	position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.accept};
  
  & + &{
	top: 50%;
	span{
	  display: inline-block;
	  transform: translateY(-50%);
	}
  }
`

const ListItem = styled.li`
	position: relative;
  
  &::before {
	content: '';
	display: inline-block;
	height: 3px;
	background-color: ${theme.colors.accept};
	
	position: absolute;
	top: 50%;
	left: -10px;
	right: -10px;
	z-index: 1;
	
	transform: scale(0);
  }
  
  &:hover {
	
	&::before{
      transform: scale(1);
	}
	
	${Mask} {
	  transform: skewX(12deg) translateX(5px);
	  color: ${theme.colors.font};
	  
	  & + ${Mask}{
		transform: skewX(12deg) translateX(-5px);
	  }
	}
  }
`