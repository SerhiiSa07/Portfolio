import React from 'react';
import styled from "styled-components";
import {PostsTitle} from "components/MainPosts";
import {Work} from "layout/sections/Work";
import designImage from '../../../assets/images/Rectangle.png'
import typographyImage from '../../../assets/images/Rectangle_3.png'
import {TabMenu} from "layout/sections/works/tabMenu/TabMenu";

const tabsItem = ['All', 'Landing page', 'React']

const workData = [
	{
		title: 'Designing Dashboards',
		src: designImage,
		yea: '2020  Dashboard',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		type: 'All'
	},
	{
		title: 'Vibrant Portraits of 2020',
		src: designImage,
		yea: '2020  Illustration',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		type: 'Landing page'
	},
	{
		title: '36 Days of Malayalam type',
		src: typographyImage,
		yea: '2018  Typography',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		type: 'React'
	}
]

export const Works: React.FC = () => {
	return (
		<StyledWorks>
			<PostsTitle>Featured works</PostsTitle>
			<TabMenu tabsItem={tabsItem}/>
			{workData.map((w) => {
					return <Work src={w.src} title={w.title} yea={w.yea} text={w.text}/>
				})
			}
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #49608a;
`