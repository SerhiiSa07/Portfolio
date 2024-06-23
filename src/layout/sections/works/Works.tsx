import React, {useState} from 'react';
import styled from "styled-components";
import {PostsTitle} from "components/MainPosts";
import {Work} from "layout/sections/Work";
import designImage from '../../../assets/images/Rectangle.png'
import typographyImage from '../../../assets/images/Rectangle_3.png'
import {TabMenu} from "layout/sections/works/tabMenu/TabMenu";
import {Container} from "components/Container";

//const tabsItem = ['All', 'Landing page', 'React']

const tabsItems: Array<{ status: 'all' | 'landing' | 'react' | 'spa', title: string }> = [

	{
		title: 'All',
		status: 'all'
	},

	{
		title: 'landing page',
		status: 'landing'
	},

	{
		title: 'React',
		status: 'react'
	},

	{
		title: 'spa',
		status: 'spa'
	}
]

const worksData = [

	{
		title: 'Designing Dashboards',
		src: designImage,
		yea: '2020  Dashboard',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		type: 'all'
	},
	{
		title: 'Vibrant Portraits of 2020',
		src: designImage,
		yea: '2020  Illustration',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		type: 'landing'
	},
	{
		title: '36 Days of Malayalam type',
		src: typographyImage,
		yea: '2018  Typography',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		type: 'react'
	}

]

export const Works: React.FC = () => {
	const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
	let filteredWorks = worksData

	if (currentFilterStatus === 'landing') {
		filteredWorks = worksData.filter(work => work.type === 'landing')
	}

	if (currentFilterStatus === 'react') {
		filteredWorks = worksData.filter(work => work.type === 'react')
	}

	if (currentFilterStatus === 'spa') {
		filteredWorks = worksData.filter(work => work.type === 'spa')
	}

	function changeFilterStatus(value: 'all' | 'landing' | 'react' | 'spa'){
		setCurrentFilterStatus(value)
	}

	return (
		<StyledWorks>
			<Container>
			<PostsTitle>Featured works</PostsTitle>
			<TabMenu tabsItems={tabsItems}
					 changeFilterStatus={changeFilterStatus}
					 currentFilterStatus={currentFilterStatus}
			/>
			{filteredWorks.map((w) => {
				return <Work
					src={w.src}
					title={w.title}
					yea={w.yea}
					text={w.text}/>
			})
			}
			</Container>
		</StyledWorks>
	);
};


const StyledWorks = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: #49608a;
  
`