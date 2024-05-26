import styled from "styled-components";

import React from 'react';

type MainPostsPropsType = {
	title: string
	text: string
}

export const MainPosts = (props: MainPostsPropsType) => {
	return (
		<MainPostsRecent>
			<PostsTitle>{props.title}</PostsTitle>
			<PostsText>{props.text}</PostsText>
		</MainPostsRecent>
	);
};


const MainPostsRecent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #233652;
`
export const PostsTitle = styled.h2`

`
export const PostsText = styled.h2`

`