import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_light,
	color_accent,
	Button,
	shadow,
	header_font
} from './../~reusables/reusables';

const SmurfFormDiv = styled.div`
	${FlexFunc('column', 'center', 'center')};
	background-color: ${color_light};
	height: 100vh;
	top: 0;
	left: 0;
	padding: 0 2rem;
	color: ${color_accent};
`;
const SmurfFormButton = styled.button`
	${Button(color_accent, color_light)};
	margin-bottom: 1rem;
	width: 10rem;
`;

const SmurfFormInput = styled.input`
	border-radius: 1rem;
	border: 2px solid ${color_accent};
	padding: 0.5rem;
	width: 15rem;
	outline: none;
	margin-bottom: 1rem;
	text-align: center;

	&:focus {
		box-shadow: ${shadow};
	}
`;
const AppHeader = styled.h1`
	font-family: ${header_font};
	font-size: 4rem;
	text-shadow: ${shadow};
`;

export const SmurfForm = props => {
	const nameRef = React.createRef();
	const ageRef = React.createRef();
	const heightRef = React.createRef();

	const clearForm = () => {
		nameRef.current.value = '';
		ageRef.current.value = '';
		heightRef.current.value = '';
	};

	const onAddSmurf = () => {
		const smurfObj = {
			name: nameRef.current.value,
			age: ageRef.current.value,
			height: heightRef.current.value
		};

		props.addSmurf(smurfObj);
		clearForm();
	};

	return (
		<SmurfFormDiv>
			<AppHeader>Smurfs</AppHeader>
			<h3>Add A Smurf</h3>
			<SmurfFormInput type="text" placeholder="Name" ref={nameRef} />
			<SmurfFormInput type="text" placeholder="Age" ref={ageRef} />
			<SmurfFormInput type="text" placeholder="Height" ref={heightRef} />
			<SmurfFormButton onClick={onAddSmurf}>Add Smurf</SmurfFormButton>
			<SmurfFormButton onClick={clearForm}>Clear</SmurfFormButton>
		</SmurfFormDiv>
	);
};
