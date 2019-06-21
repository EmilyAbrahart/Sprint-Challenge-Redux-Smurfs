import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_light,
	color_transparent,
	color_warning,
	Button,
	color_transparent_white, header_font, shadow
} from './../~reusables/reusables';

const SmurfDiv = styled.div`
	${FlexFunc('column', 'center', 'center')}
	width: 400px;
	height: 250px;
	margin: 2rem;
	color: ${color_light};
	border-radius: 2rem;
	border: 4px solid ${color_light};
	background: ${color_transparent_white};
	box-sizing: border-box;
	position: relative;
`;

const DeleteSmurfButton = styled.button`
	${Button(color_transparent, color_light)};
	border: none;
	font-size: 1.5rem;
	position: absolute;
	top: 1rem;
	left: 1.5rem;

	&:hover {
		color: ${color_warning};
		background: ${color_transparent};
	}
`;

const SmurfName = styled.div`
font-weight: bold;
font-family: ${header_font};
font-size: 1.5rem;
text-shadow: ${shadow};
`

export const Smurf = props => {
	const onDeleteSmurf = () => {
		props.deleteSmurf(props.id);
	};

	return (
		<SmurfDiv>
			<SmurfName>{props.name}</SmurfName>
			<div>Age: {props.age}</div>
			<div>Height: {props.height}</div>
			<DeleteSmurfButton
				onClick={() => {
					onDeleteSmurf();
				}}
			>
				x
			</DeleteSmurfButton>
		</SmurfDiv>
	);
};
