import React from 'react';
import styled from "styled-components";
import {Container} from "components/Container";

export const Home = () => {
	return (
		<Container>
		<StyleHome>
			<GreatBox>With great power comes great electricity bill
			</GreatBox>
			<StyleBox>- Dr. Who</StyleBox>
		</StyleHome>
		</Container>
	);
};


const StyleHome = styled.div`
  position: relative;
  padding: 20px 40px;
  background-color: #1c1c1c;
  color: #fff;
  border: 1px solid #fff;
  text-align: right; /* Align text to the right */
  margin-bottom: 20px;
`

const GreatBox = styled.div`
  position: relative;
  //padding: 20px 40px;
  background-color: #1c1c1c;
  color: #fff;
  border: 2px solid #fff;
  width: 712px;
  height: 95px;
  text-align: center;
  margin-left: 200px;
 padding-top: 30px;
  
  &::before{
    content: '“';
    position: absolute;
	margin: -50px;
    font-size: 3em;
    color: #fff;
	
  }
  &::after {
    content: '“';
    position: absolute;
    padding: 45px;
    font-size: 3em;
    color: #fff;
  }
  
`

const StyleBox = styled.div`
  width: 162px;
  height: 63px;
  text-align: center;
  color: #888;
  border: 2px solid #fff;
  padding: 20px;
  margin-left: 750px;
`